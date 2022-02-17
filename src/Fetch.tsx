import React, { useState, useReducer } from "react";
import axios from "axios";
interface State {
  error: string | null;
  greeting: string | null;
}
const initialState = {
  error: null,
  greeting: null,
};

interface Action {
  type: "SUCCESS" | "ERROR";
  greeting?: string | null;
  error?: string | null;
}

function greetingReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SUCCESS": {
      return {
        error: null,
        greeting: action.greeting ?? null,
      };
    }
    case "ERROR": {
      return {
        error: action.error ?? null,
        greeting: null,
      };
    }
    default: {
      return state;
    }
  }
}
export interface FetchProps {
  url: string;
}
export function Fetch(props: FetchProps) {
  const [{ error, greeting }, dispatch] = useReducer(
    greetingReducer,
    initialState
  );
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchGreeting = async (url: string) =>
    axios
      .get(url, {
        headers: {
          "authorization": "Bearer " + process.env.REACT_APP_GIT_TOKEN
        }
      })
      .then((response) => {
        const { data } = response;
        const { greeting } = data;
        dispatch({ type: "SUCCESS", greeting });
        setButtonClicked(true);
      })
      .catch((error) => {
        dispatch({ type: "ERROR", error });
      });

  const buttonText = buttonClicked ? "Ok" : "Load Greeting";

  return (
    <div>
      <button onClick={() => fetchGreeting(props.url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  );
}

import { useState, useEffect } from "react";

const API = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM";

export async function FetchAllPlayers() {
  try {
    const response = await fetch(`${API}/players`);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}


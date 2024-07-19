import { useContext } from "react";
import { Web3context } from "./createWeb3context";

export const useWeb3context = () => {
    useContext(Web3context)
}
import axios from "axios";
import { loginTypes, signUpTypes } from "./data-types";
import { error } from "console";
import callAPI from "@/config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data: FormData){
    const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
    return callAPI({
        url,
        method: 'POST',
        data,
    });
}

export async function setLogin(data: loginTypes){
    const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

   return callAPI({
    url,
    method: 'POST',
    data,
   });

}
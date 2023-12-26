"use client"
import { useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter , IBM_Plex_Mono} from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { test, is_valid_hex } from '../crypto'

const inter = Inter({ subsets: ['latin'] })
const ibm_plex = IBM_Plex_Mono({ subsets: ['latin'],
                  weight:["100", "200", "300", "400",
                          "500", "600", "700"] })
function xor_strings(string1, string2){
  if(!(is_valid_hex(string1 + string2) 
        && string1.length == string2.length)){
        return "Non vaild strings"
  }
  let result = "";
  for(let i = 0; i < string1.length; i++){
    let hex1 = parseInt(string1[i], 16);
    let hex2 = parseInt(string2[i], 16);
    let hex3 = hex1 ^ hex2;
    result += (hex3.toString(16));
  }
  return result; 
}

export default function Home() {
  const [string1, set_string1] = useState("")
  const [string2, set_string2] = useState("")		
  const [result, set_result] = useState("")
  useEffect(()=>{
    set_result(xor_strings(string1, string2))
  },[string1, string2])
	function handle_string1_change(event){
    set_string1(String(event.target.value));
  }
  function handle_string2_change(event){
    set_string2(String(event.target.value));
  }
  return (
    <div  className = {`${ibm_plex.className}`}>
      <h1>Xor two hex strings</h1>
      <label>
      String 1:
      <input style = {{fontSize: 18 }}
             value = {string1}
             onChange = {handle_string1_change}/>
      </label>
      <br/>
      <label>
      String 2:
      <input style = {{fontSize: 18 }}
             value = {string2}
             onChange = {handle_string2_change}/>
      </label>

      <p>Result: {result}</p>


   </div>
  )
}

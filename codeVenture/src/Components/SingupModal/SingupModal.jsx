import { useState } from "react";

function GeneratorePsw(){
    const [password, setPassword] = useState('');

    const generateRandomChar = (charSet) => {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      return charSet[randomIndex];
    };
  
    const generatePassword = (length, charSet) => {
      if (length <= 0) {
        return '';
      }
  
      const randomChar = generateRandomChar(charSet);
      return randomChar + generatePassword(length - 1, charSet);
    };
  
    const handleGeneratePassword = () => {
      const length = 12; // Lunghezza della password
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numericChars = '0123456789';
      const specialChars = '!@#$%^&*()_-+=<>?';
  
      const charSet = lowercaseChars + uppercaseChars + numericChars + specialChars;
  
      const newPassword = generatePassword(length, charSet);
      setPassword(newPassword);
    };
  
    return (
      <div>
        <button onClick={handleGeneratePassword}>Genera Password</button>
        <p> {password}</p>
      </div>
    );
  };
  

export default GeneratorePsw

 
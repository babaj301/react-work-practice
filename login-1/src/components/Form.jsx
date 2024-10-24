import { useState } from 'react';
import Header from './Header';
import RememberSection from './RememberSection';
import Button from './Button';
import SlashIcon from '../assets/not-slashed.svg';
import Eye from '../assets/eye.svg';
import MessageIcon from '../assets/message.svg';
import Google from '../assets/icons8-google.svg';
import Twitter from '../assets/icons8-twitter.svg';
import AccountSection from './AccountSection';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(true);

  const db = {
    email,
    password,
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const changeEye = () => {
    setEye(!eye);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password.value);
    db.email = email;
    db.password = password;

    console.log(db);
  };
  return (
    <div className="m-auto flex flex-col gap-6 lg:w-[400px]">
      <Header
        heading={'Log In'}
        paragraph={'Enter your credentials to access you account'}
      />
      <form name="email" method="post" onSubmit={handleSubmit}>
        <div>
          <label className="font-medium text-sm text-[#101928]">
            EMAIL ADDRESS
          </label>
          <div className="w-full mt-1 mb-6 flex items-center relative placeholder-[#98A2B3]">
            <input
              className="w-full p-4 rounded-lg border border-[#D0D5DD] hover:border-[#FA9874] appearance-none outline-none shadow-md"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <img className="absolute right-6" src={MessageIcon} alt="" />
          </div>
        </div>

        <div className="gap-2">
          <label className="font-medium text-sm text-[#101928]">PASSWORD</label>
          <div className="w-full mt-1 mb-6 flex items-center relative placeholder-[#98A2B3]">
            <input
              className="w-full p-4 rounded-lg border border-[#D0D5DD] hover:border-[#FA9874] appearance-none outline-none shadow-md"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button onClick={changeEye} className=" absolute ml-2 right-6">
              <img className="slash" src={eye ? Eye : SlashIcon} alt="" />
            </button>
          </div>
        </div>
        <RememberSection />
        <button
          className="form-button w-full font-semibold text-base text-white py-4 px-6 rounded-lg mb-4 bg-[#EB5017]"
          type="submit"
        >
          Log into Account
        </button>
      </form>

      <div className="flex gap-2 items-center justify-center w-full mb-4">
        <hr className="flex-grow" />
        <p className="text-input-grey">OR</p>
        <hr className="flex-grow" />
      </div>
      <div className="gap-6">
        <Button logo={Google} text={'Continue with Google'} />
        <Button logo={Twitter} text={'Continue with Twitter'} />
      </div>
      <AccountSection />
    </div>
  );
};

export default Form;

import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaV2Example = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaChange = (token) => {
    setIsCaptchaVerified(!!token);
  };

  const handleSubmit = () => {
    if (isCaptchaVerified) {
      alert('CAPTCHA verified, form submitted!');
      // You can trigger your form submit logic here (e.g., call API)
    } else {
      alert('Please verify the CAPTCHA before submitting.');
    }
  };

  return (
    <div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="YOUR_SITE_KEY"  // Replace with your actual site key
        onChange={handleCaptchaChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RecaptchaV2Example;

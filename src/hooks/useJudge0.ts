import axios from 'axios';

export const useJudge0 = () => {
  const postSubmission = async (language_id: number, source_code: string, stdin: string) => {
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_JUDGE0_CREATE_SUBMISSION_API_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      data: JSON.stringify({
        language_id: language_id,
        source_code: source_code,
        stdin: stdin
      })
    };

    const res = await axios.request(options);
    return res.data.token;
  };
  

  const getOutput:any = async (token: string) => {
    const options = {
      method: 'GET',
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_JUDGE0_GET_SUBMISSION_API_KEY,
        // 'X-RapidAPI-Key': '3ed7a75b44mshc9e28568fe0317bp17b5b2jsn6d89943165d8',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    };

    const res = await axios.request(options);
    if (res.data.status_id <= 2) {
      const res2 = await getOutput(token);
      return res2.data;
    }
    return res.data;
  }

  return { getOutput, postSubmission };
};
import generateId from 'uuid';

export const sendRequest = (apiEndpoint, data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const parsedData = JSON.parse(data);
      parsedData.id = generateId();
      resolve(new Response(JSON.stringify(parsedData)));
    }, 35);
  });
};

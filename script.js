'use strict';

const api = document.querySelector('.api');

const renderApi = function (data) {
  const html = `
  <div><img src="${data.body[0].location}"/></div>
  <div><p>${data.body[0].id}</p></div>
  <div><p>${data.body[0].observation_id}</p></div>
  <div><p>${data.body[0].program}</p></div>
  <div><p>${data.body[0].file_type}</p></div>
  `;


  api.insertAdjacentHTML('beforeend', html);
};






var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "4944e2fe-00c0-4654-b454-d7c9e319e31f");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


const getApiData = function (id) {
  fetch(`https://api.jwstapi.com/program/${id}/2734`, requestOptions)
    .then(function (response) {
      console.log(response);
      return response.json();
    }).then(function (data) {
      console.log(data);
      renderApi(data);
    });
};
getApiData('id')

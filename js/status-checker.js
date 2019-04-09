class StatusChecker {

  static check(url)
  {
    return axios(url, {
      method         : 'GET',
      mode           : 'no-cors',
      headers        : {
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type'               : 'application/json',
      },
      withCredentials: true,
      credentials    : 'same-origin',
    });
  }
}
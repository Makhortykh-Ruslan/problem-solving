function reversString(s) {
  // let left = 0;
  // let right = s.length - 1;
  //
  // while (left < right) {
  //   const temp = s[left];
  //   s[left] = s[right];
  //   s[right] = temp;
  //   console.log('xxx');
  //   left++;
  //   right--;
  // }
  //
  // console.log('s', s);
  // return s;

  let str = '';

  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }

  console.log('str', str);
}

reversString(['h', 'e', 'l', 'l', 'o']);

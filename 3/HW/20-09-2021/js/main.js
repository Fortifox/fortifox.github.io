for (i = 0; i < 20; i++) {
  for (let k = 2; k < i; k++) {
    if(i % k == 0) {
      console.log(`${i} делится на ${k}`)
    };
  }
}

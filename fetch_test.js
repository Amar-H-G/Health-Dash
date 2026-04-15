const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
  headers: {
    'Authorization': 'Basic ' + Buffer.from('coalition:skills-test').toString('base64')
  }
});
const data = await res.json();
const jessica = data.find(p => p.name === 'Jessica Taylor');
console.log(JSON.stringify(jessica, null, 2));

// Solution 1
const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    //  error handling code here
    console.log(err);
    // throw new Error(err);
  }
  const allStats = Array(filenames.length).fill(null);
  for (let filename of filenames) {
    const index = filenames.indexOf(filename);
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      allStats[index] = stats;
      const ready = allStats.every((stats) => {
        return stats;
      });
      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
  //  BAD CODE HERE!
  for (let filename of filenames) {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      console.log(filename, stats.isFile());
    });
  }
  //  BAD CODE COMPLETE
});

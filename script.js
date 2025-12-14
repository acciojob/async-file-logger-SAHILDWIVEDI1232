
// do not change the code above
// add your code here
// Given array of file names
const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt'
];

// Read and log all files asynchronously
async function readFilesAsync() {
  try {
    // Create fetch promises for all files
    const promises = files.map(file =>
      fetch(file).then(response => response.text())
    );

    // Wait for all files to be read
    const contents = await Promise.all(promises);

    // Log each file content
    contents.forEach(content => {
      console.log(content);
    });

  } catch (error) {
    console.error('Error reading files:', error);
  }
}

// Execute function
readFilesAsync();

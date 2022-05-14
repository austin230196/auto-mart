const isWindows = process.platform === 'win32';

module.exports = (fs, path) => {
    file_path = path.join(__dirname, "..", ".env");
    file_content = fs.readFileSync(file_path, "utf8");

    /**
     * IMPROV: We need to check the os if windows split at \r\n else \n 
     */
    file_content = isWindows ? file_content.split("\r\n") : file_content.split("\n");
    for(let content of file_content) {
        importenv(content);
    }
}


const importenv = env => {
    const [key, value] = env.split("=");
    console.log({key, value, platform: process.platform});
    process.env[key.trim()] = value.trim();
}
import fetch from "node-fetch";
import path from "path";
const basePath = process.cwd();
import fs from "fs";

fs.writeFileSync(`${basePath}/build/json/_ipfsMetas.json`, "");
const writter = fs.createWriteStream(`${basePath}/build/json/_ipfsMetas.json`, {
    flags: "a",
});
writter.write("[");
const readDir = `${basePath}/build/json`;
let fileCount = fs.readdirSync(readDir).length - 2;

fs.readdirSync(readDir).forEach(file => {
    if (file === '_metadata.json' || file === '_ipfsMetas.json')
        return;

    const jsonFile = fs.readFileSync(`${readDir}/${file}`);

    let url = 'https://api.nftport.xyz/v0/metadata';

    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "aplication/json",
            Authorization: '52547ea8-ca41-4048-b1f6-3c16a9fd5d2f',
        },
        body: jsonFile,
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            writter.write(JSON.stringify(json, null, 2));
            fileCount--;

            if (fileCount === 0) {
                writter.write("]");
                writter.end();
            } else {
                writter.write(",\n");
            }

            console.log(`${json.name} metadata uploaded & added to _ipfsMetas.json! `);
        })
        .catch(err => console.error('error:' + err));

})
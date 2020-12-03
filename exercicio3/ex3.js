const fs = require("fs");
let path = __dirname + "/log.txt"
let conteudo = fs.readFileSync(path, "utf-8");

function getHeader(line)
{
    let obj = {}
    let x = -1
    if (!line) return 0;
    while (line[++x]) {
        obj[line[x]] = null;
    }
    return obj;
}

function breakLine(string, res){
    let header;
    let line = -1;
    let chars = -1;
    let start = 0;
    while (string[++chars])
    {
        if (string[chars] === "\n")
        {
            start += 2;
            continue;
        }
        if (string[chars + 1] === "\n" || string[chars + 1] === undefined)
        {
            if (!(++line))
            {
                res[line] = string.substring(start, chars);
                res[line] = res[line].split(";");
                header = getHeader(res[line]);
                console.log(header)
                start = chars;
                continue
            }
            res[line - 1] = string.substring(start, chars);
            res[line - 1] = res[line - 1].split(";");
            console.log(`Linha ${line}: ` + res[line - 1])
            start = chars;
        }
    }
}
console.log(conteudo)
let res = []
breakLine(conteudo, res);
const http = require("http");
const { db } = require("./Connectdb");

const server = http.createServer((req, resp) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    db.query("select * from students", (err, Students) => {
      const row = Students.map((student) => {
        return `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>${student.subject}</td>
                <td><a href="/edit?id=${student.id}"><button>Update</button></a></td>
                <td><a href="/delete?id=${student.id}"><button>Delete</button></a></td>
                </tr>`;
      }).join("");

      const html = `<body>

            <form action='/insert' method="POST">
            Name: <input type="text" name="name"><br>
            Grade: <input type="text" name="grade"><br>
            Subject: <input type="text" name="subject"><br> 
            <button type="submit">Insert</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Subject</th>
                </tr>
                </thead>
                <tbody>
                    ${row}
                </tbody>
            </table></body>
            
            `;

        resp.end(html);
    });
  }
  else if(url==='/insert' && method==="POST") {
    let body=""
    req.on("data", (chunk)=>{
      body+=chunk.toString();
      console.log(body);
    });

    req.on("end", ()=> {
      const param = new URLSearchParams(body);
      console.log(param);
      const name=param.get("name");
      const grade = param.get("grade");
      const subject = param.get("subject");

      db.query("INSERT INTO STUDENTS(name,grade,subject) value(?,?,?)",[name,grade,subject],(err)=>{
        if(err) throw err;
        console.log("Data inserted successfully");
        resp.writeHead(302,{location:"/"});
        resp.end();
      })
    })
  }
  else if(url.startsWith('/edit') && method=="GET") {
    const id= new URL(req.url,`http://${req.headers.host}`).searchParams.get("id");
     db.query("select * from students where id=?",[id], (err, Student) => {
      if(err) throw err;
      const nameval=Student[0].name;
      const gradeval=Student[0].grade;
      const subjval=Student[0].subject; 

      const html=`<body>
    <form action='/update' method='POST'>
    ID: <input type="text" value="${id}" name="id" readonly><br>
    Name: <input type="text" value="${nameval}" name="name"><br>
    Grade: <input type="text" value="${gradeval}" name="grade"><br>
    Subject: <input type="text" value="${subjval}" name="subject"><br>
    <button type='submit'>Update</button>
    </form>
    </body>
    `
    resp.end(html);  
     });
    
  }
  else if(url==='/update' && method==='POST'){
    let body=""
    req.on("data",(chunk)=>{
      body+=chunk.toString();
    })

    req.on("end", ()=>{
      const params = new URLSearchParams(body);
      const id = params.get("id");
      const name = params.get("name");
      const grade = params.get("grade");
      const subject = params.get("subject");

      db.query("UPDATE STUDENTS SET name=?,grade=?,subject=? where id=?",[name,grade,subject,id],(err)=>{
        if(err) throw err;
        console.log("Updated successfully");
        resp.writeHead(302,{location:'/'});
        resp.end();
      })
    })



  }
  else if(url.startsWith("/delete") && method==="GET") {
    const id= new URL(req.url,"http://${req.headers.host}").searchParams.get("id");

    db.query("DELETE from students where id=?",[id],(err)=>{
      if(err) throw err;
      console.log("data Deleted successfully");
      resp.writeHead(302,{location:'/'});
      resp.end();
    })
  }
  
});

server.listen(4000);

const pool = require ('../database/connection');
module.exports = {
    async getGrade(request, response){
        const cpf = request.body.cpf;
        const query = `SELECT gr."CLASS", gr."HOUR", tc."SUBJECT", tc."NAME" FROM "GRADE" AS gr INNER JOIN "TEACHERS" AS tc ON gr."TEACHERID"= tc."ID" WHERE gr."STUDENTCPF" ='${cpf}' ORDER BY "HOUR"`;
            await pool.query(query,(err,result)=>{
                if(err) throw err;
                return response.json(result.rows);
            })
    }
}
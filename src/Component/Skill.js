
function Skills() {
    // console.log(listOfSkills.language)
    var langList = {
        "language": ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'Go'], "db": ['SQL', 'DynamoDB', 'MongoDB'], "framework": ['Flask', 'SpringBoot', 'SpringMVC'],
        "technology": ['AWS Step Function', 'AWS Lambda Function', 'EC2', 'Serverless API', 'Microservices', 'S3 bucket', 'AWS SQS queue'], "communication": ['English', 'Hindi'],
        "library": ['jQuery', 'React JS', 'Node JS', 'Express JS', 'Gson', 'Junit', 'BootStrap', 'AJAX', 'Fetch', 'JPA', 'JDBC', 'JAXB', 'DSRestUtil', 'HTTP Client', 'ESPrexyClient', 'Swaggwr', 'JavaDoc'],
        'tools': ['Postman', 'VS Code Editor', 'Ecplise', 'STS']
    }

    return (<>
        <div className="body">
            <h1 className='heading'>Skills</h1>
            <div className="education">

                <ol>
                    {langList.language.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ol>

                <ol>
                    {langList.framework.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ol>

                <ol>
                    {langList.db.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ol>

                <ol>
                    {langList.library.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ol>

                <ol>
                    {langList.technology.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ol>

                <ol>
                    {langList.tools.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ol>

                <ol>
                    {langList.communication.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ol>


            </div>
        </div>
    </>)
}
export default Skills;
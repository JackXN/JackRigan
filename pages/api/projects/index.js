/* eslint-disable import/no-anonymous-default-export */
import { projects } from '../../../data'

// export default function(req,res) { 
// res.status(200).json({name: 'API TEST'})
// }



// Dummy data to test 

export default async (req,res) => {
    const httpMethod = req.method;

    // Request these properties
    const {id, title, description} = req.body;

    switch(httpMethod) {
        case 'GET':
            res.status(200).json(projects);
            break
            case "POST":
                //Create new project record
                res.status(200).json({
                    title: title,
                    id: id,
                    description:description,
                });
                break;
                default: 
                res.setHeader('Allow', ['GET', 'POST'] );
                // Returns a message if the status code is 405
                res.status(405).end(`Method ${httpMethod} not welcome`)
    } 
}
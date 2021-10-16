import { useRouter } from 'next/router'
import {Text} from '@chakra-ui/react';
import Project from './project';


const ProjectDetails = () => {

const router = useRouter();
const {id} = router.query;

    return (
   <h1>Hello</h1>
    )
}

export default ProjectDetails;


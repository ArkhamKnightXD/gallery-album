import {Brightness1, LocalDining, Note} from "@material-ui/icons";

export default function Icons({choice}){


   if(choice === 'rock'){
       return <Brightness1/>
   }

    if(choice === 'scissors'){
        return <LocalDining/>
    }

    if(choice === 'paper'){
        return <Note/>
    }

}

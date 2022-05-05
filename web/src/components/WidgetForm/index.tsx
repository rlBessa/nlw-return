/* Parei em 50:55 AULA 2!!!! */

import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../images/bug.svg';
import ideaImageUrl from '../../images/lightbulb.svg';
import otherImageUrl from '../../images/chat-centered-text.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title:'Bug',
        image: {
            source:bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title:'Sugestão',
        image: {
            source:ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },
    OTHER: {
        title:'Comentário',
        image: {
            source:otherImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);


    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 
            { feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>    
                    ) : (
                        <FeedbackContentStep                     
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}    



            <footer className="text-xs text-neutral-400">
                Powered by <a className="underline underline-offset-2" href="https://github.com/rlbessa">rlBessa</a>
            </footer>



        </div>

    );


}
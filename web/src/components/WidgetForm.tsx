import { CloseButtom } from "./CloseButtom";
import bugImageUrl from '../images/bug.svg';
import ideaImageUrl from '../images/lightbulb.svg';
import otherImageUrl from '../images/chat-centered-text.svg';
import { useState } from "react";
const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>   
                <CloseButtom />
            </header> 

            {!feedbackType ? (
                <div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key, value]) => { 
                        return(
                            <button
                                key={key}   
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col flex items-center gap-2 border-2 border-transparent hover:border-richard-500 focus:border-richard-500 focus:outline-none"
                                onClick={() => setFeedbackType(key as FeedbackType)}
                                type="button"

                            >
                                <img src={value.image.source} alt={value.image.alt}/>
                                <span>{value.title}</span>
                            </button>
                        );
                    }) }
                </div>
            ) : (
                <p>Ta funcionando!!!</p>
            )}

            <footer className="text-xs text-neutral-400">
                Powered by <a className="underline underline-offset-2" href="https://github.com/rlbessa">rlBessa</a>
            </footer>



        </div>

    );


}
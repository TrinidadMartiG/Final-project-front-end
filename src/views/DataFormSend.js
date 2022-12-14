import React, { useState } from "react";


let Form = () => {

    /* State first section */
    const [inputMainTitle, setInputMainTitle] = useState('');
    const [inputMainDescription, setInputMainDescription] = useState('');
    /* State second section */
    const [input_SecondSection_MainTitle, setInput_SecondSection_MainTitle] = useState('');
    const [input_SecondSection_Description, setInput_SecondSection_Description] = useState('');
    const [input_SecondSection_ConceptOne_Title, setInput_SecondSection_ConceptOne_Title] = useState('');
    const [input_SecondSection_ConceptOne, setInput_SecondSection_ConceptOne] = useState('');
    const [input_SecondSection_ConceptTwo_Title, setInput_SecondSection_ConceptTwo_Title] = useState('');
    const [input_SecondSection_ConceptTwo, setInput_SecondSection_ConceptTwo] = useState('');
    const [input_SecondSection_ConceptThree_Title, setInput_SecondSection_ConceptThree_Title] = useState('');
    const [input_SecondSection_ConceptThree, setInput_SecondSection_ConceptThree] = useState('');
    const [input_SecondSection_ConceptFour_Title, setInput_SecondSection_ConceptFour_Title] = useState('');
    const [input_SecondSection_ConceptFour, setInput_SecondSection_ConceptFour] = useState('');
    const [input_SecondSection_ConceptFive_Title, setInput_SecondSection_ConceptFive_Title] = useState('');
    const [input_SecondSection_ConceptFive, setInput_SecondSection_ConceptFive] = useState('');
    const [input_SecondSection_ConceptSix_Title, setInput_SecondSection_ConceptSix_Title] = useState('');
    const [input_SecondSection_ConceptSix, setInput_SecondSection_ConceptSix] = useState('');
    /* State third section */
    const [input_ThirdSection_MainTitle, setInput_ThirdSection_MainTitle] = useState('');
    const [input_ThirdSection_Description, setInput_ThirdSection_Description] = useState('');
    const [input_ThirdSection_LeftConceptOne_BlueHighlightText, setInput_ThirdSection_LeftConceptOne_BlueHighlightText] = useState('');
    const [input_ThirdSection_LeftConceptOne_Title, setInput_ThirdSection_LeftConceptOne_Title] = useState('');
    const [input_ThirdSection_LeftConceptOne_Description, setInput_ThirdSection_LeftConceptOne_Description] = useState('');
    const [input_ThirdSection_RightConceptTwo_BlueHighlightText, setInput_ThirdSection_RightConceptTwo_BlueHighlightText] = useState('');
    const [input_ThirdSection_RightConceptTwo_Title, setInput_ThirdSection_RightConceptTwo_Title] = useState('');
    const [input_ThirdSection_RightConceptTwo_Description, setInput_ThirdSection_RightConceptTwo_Description] = useState('');
    const [input_ThirdSection_LeftConceptThree_BlueHighlightText, setInput_ThirdSection_LeftConceptThree_BlueHighlightText] = useState('');
    const [input_ThirdSection_LeftConceptThree_Title, setInput_ThirdSection_LeftConceptThree_Title] = useState('');
    const [input_ThirdSection_LefttConceptThree_Description, setInput_ThirdSection_LefttConceptThree_Description] = useState('');
    /* State fourth section */
    const [input_FourthSection_TestimonialsMainTitle, setInput_FourthSection_TestimonialsMainTitle] = useState('');
    const [input_FourthSection_TestimonialsDescription, setInput_FourthSection_TestimonialsDescription] = useState('');
    const [input_FourthSection_CardOneText, setInput_FourthSection_CardOneText] = useState('');
    const [input_FourthSection_CardOne_Person, setInput_FourthSection_CardOne_Person] = useState('');
    const [input_FourthSection_CardTwoText, setInput_FourthSection_CardTwoText] = useState('');
    const [input_FourthSection_CardTwo_Person, setInput_FourthSection_CardTwo_Person] = useState('');
    const [input_FourthSection_CardThreeText, setInput_FourthSection_CardThreeText] = useState('');
    const [input_FourthSection_CardThree_Person, setInput_FourthSection_CardThree_Person] = useState('');

    /* First section functions */
    const handleSubmitFirstSection = (e) => {
        e.preventDefault()
        send_data_firstsection()
    }

    const dealChangeTitle = e => {
        e.preventDefault()
        setInputMainTitle(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChangeDescription = e => {
        e.preventDefault()
        setInputMainDescription(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }

    const send_data_firstsection = () => {
        fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/send_data_firstsection", {
            method: "POST",
            body: JSON.stringify({
                mainTitle: inputMainTitle,
                mainDescription: inputMainDescription,
                user_id: 3
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    /* end of First section functions */

    /* Second section functions */
    const handleSubmitSecondSection = (e) => {
        e.preventDefault()
        send_data_secondsection()
    }
    const dealChange_SecondSection_Title = e => {
        e.preventDefault()
        setInput_SecondSection_MainTitle(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_Description = e => {
        e.preventDefault()
        setInput_SecondSection_Description(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptOne = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptOne(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptOne_Title = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptOne_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptTwo = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptTwo(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptTwo_Title = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptTwo_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptThree = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptThree(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptThree_Title = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptThree_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptFour = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptFour(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptFour_Title = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptFour_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptFive = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptFive(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptFive_Title = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptFive_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptSix = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptSix(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_SecondSection_ConceptSix_Title = e => {
        e.preventDefault()
        setInput_SecondSection_ConceptSix_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }

    const send_data_secondsection = () => {
        fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/send_data_secondsection", {
            method: "POST",
            body: JSON.stringify({
                secondSection_MainTitle: input_SecondSection_MainTitle,
                secondSection_Description: input_SecondSection_Description,
                secondSection_ConceptOne_Title: input_SecondSection_ConceptOne_Title,
                secondSection_ConceptOne: input_SecondSection_ConceptOne,
                secondSection_ConceptTwo_Title: input_SecondSection_ConceptTwo_Title,
                secondSection_ConceptTwo: input_SecondSection_ConceptTwo,
                secondSection_ConceptThre_Title: input_SecondSection_ConceptThree_Title,
                secondSection_ConceptThre: input_SecondSection_ConceptThree,
                secondSection_ConceptFour_Title: input_SecondSection_ConceptFour_Title,
                secondSection_ConceptFour: input_SecondSection_ConceptFour,
                secondSection_ConceptFive_Title: input_SecondSection_ConceptFive_Title,
                secondSection_ConceptFive: input_SecondSection_ConceptFive,
                secondSection_ConceptSix_Title: input_SecondSection_ConceptSix_Title,
                secondSection_ConceptSix: input_SecondSection_ConceptSix,
                user_id: 5
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
            .then(response => console.log(response))
    }
    /* End Second section */

    /* Start Third section */
    const handleSubmitThirdSection = (e) => {
        e.preventDefault()
        send_data_thirdsection()
    }
    const dealChange_ThirdSection_Title = e => {
        e.preventDefault()
        setInput_ThirdSection_MainTitle(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_Description = e => {
        e.preventDefault()
        setInput_ThirdSection_Description(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_LeftConceptOne_BlueHighlightText = e => {
        e.preventDefault()
        setInput_ThirdSection_LeftConceptOne_BlueHighlightText(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_LeftConceptOne_Title = e => {
        e.preventDefault()
        setInput_ThirdSection_LeftConceptOne_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_LeftConceptOne_Description = e => {
        e.preventDefault()
        setInput_ThirdSection_LeftConceptOne_Description(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_RightConceptTwo_BlueHighlightText = e => {
        e.preventDefault()
        setInput_ThirdSection_RightConceptTwo_BlueHighlightText(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_RightConceptTwo_Title = e => {
        e.preventDefault()
        setInput_ThirdSection_RightConceptTwo_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_RightConceptTwo_Description = e => {
        e.preventDefault()
        setInput_ThirdSection_RightConceptTwo_Description(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_LeftConceptThree_BlueHighlightText = e => {
        e.preventDefault()
        setInput_ThirdSection_LeftConceptThree_BlueHighlightText(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_LeftConceptThree_Title = e => {
        e.preventDefault()
        setInput_ThirdSection_LeftConceptThree_Title(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_ThirdSection_LefttConceptThree_Description = e => {
        e.preventDefault()
        setInput_ThirdSection_LefttConceptThree_Description(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }

    const send_data_thirdsection = () => {
        fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/send_data_thirdsection", {
            method: "POST",
            body: JSON.stringify({
                thirdSection_MainTitle: input_ThirdSection_MainTitle,
                thirdSection_Description: input_ThirdSection_Description,
                thirdSection_LeftConceptOne_BlueHighlightText: input_ThirdSection_LeftConceptOne_BlueHighlightText,
                thirdSection_LeftConceptOne_Title: input_ThirdSection_LeftConceptOne_Title,
                thirdSection_LeftConceptOne_Description: input_ThirdSection_LeftConceptOne_Description,
                thirdSection_RightConceptTwo_BlueHighlightText: input_ThirdSection_RightConceptTwo_BlueHighlightText,
                thirdSection_RightConceptTwo_Title: input_ThirdSection_RightConceptTwo_Title,
                thirdSection_RightConceptTwo_Description: input_ThirdSection_RightConceptTwo_Description,
                thirdSection_LeftConceptThree_BlueHighlightText: input_ThirdSection_LeftConceptThree_BlueHighlightText,
                thirdSection_LeftConceptThree_Title: input_ThirdSection_LeftConceptThree_Title,
                thirdSection_LefttConceptThree_Description: input_ThirdSection_LefttConceptThree_Description,
                user_id: 5
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
            .then(response => console.log(response))
    };

    /* End third section */
    /* Start fourth section */
    const handleSubmitFourthSection = (e) => {
        e.preventDefault()
        send_data_fourthsection()
    }
    const dealChange_FourthSection_TestimonialsMainTitle = e => {
        e.preventDefault()
        setInput_FourthSection_TestimonialsMainTitle(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_fourthSection_TestimonialsDescription = e => {
        e.preventDefault()
        setInput_FourthSection_TestimonialsDescription(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_fourthSection_CardOneText = e => {
        e.preventDefault()
        setInput_FourthSection_CardOneText(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_fourthSection_CardOne_Person = e => {
        e.preventDefault()
        setInput_FourthSection_CardOne_Person(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_fourthSection_CardTwoText = e => {
        e.preventDefault()
        setInput_FourthSection_CardTwoText(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_fourthSection_CardTwo_Person = e => {
        e.preventDefault()
        setInput_FourthSection_CardTwo_Person(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_fourthSection_CardThreeText = e => {
        e.preventDefault()
        setInput_FourthSection_CardThreeText(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }
    const dealChange_fourthSection_CardThree_Person = e => {
        e.preventDefault()
        setInput_FourthSection_CardThree_Person(e.target.value)
        console.log(e.target.value, 'dealChange e.target.value')
    }

    const send_data_fourthsection = () => {
        fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/send_data_fourthsection", {
            method: "POST",
            body: JSON.stringify({
                fourthSection_TestimonialsMainTitle: input_FourthSection_TestimonialsMainTitle,
                fourthSection_TestimonialsDescription: input_FourthSection_TestimonialsDescription,
                fourthSection_CardOneText: input_FourthSection_CardOneText,
                fourthSection_CardOne_Person: input_FourthSection_CardOne_Person,
                fourthSection_CardTwoText: input_FourthSection_CardTwoText,
                fourthSection_CardTwo_Person: input_FourthSection_CardTwo_Person,
                fourthSection_CardThreeText: input_FourthSection_CardThreeText,
                fourthSection_CardThree_Person: input_FourthSection_CardThree_Person,
                user_id: 3
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
            .then(response => console.log(response))
    };


    /* Start third section */

    return (
        <div className="container">

            <div className="row mt-5 text-center">
                <div className="col-lg">
                    <form onSubmit={handleSubmitFirstSection}>
                        <div>
                            <h4>First section Title:
                                <input type="text" name="" id="" value={inputMainTitle} onChange={dealChangeTitle} />
                            </h4>
                            <h5>First section Description:
                                <input type="text" name="" id="" value={inputMainDescription} onChange={dealChangeDescription} />
                            </h5>
                            <button> Enviar </button>
                        </div>
                    </form>
                    <form onSubmit={handleSubmitSecondSection}>
                        <div>
                            <h4>Second section Title:
                                <input type="text" name="" id="" value={input_SecondSection_MainTitle} onChange={dealChange_SecondSection_Title} />
                            </h4>
                            <h5>Second section Description:
                                <input type="text" name="" id="" value={input_SecondSection_Description} onChange={dealChange_SecondSection_Description} />
                            </h5>
                            <h5>Second section Concept One Title:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptOne_Title} onChange={dealChange_SecondSection_ConceptOne_Title} />
                            </h5>
                            <h5>Second section Concept One:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptOne} onChange={dealChange_SecondSection_ConceptOne} />
                            </h5>
                            <h5>Second section Concept Two Title:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptTwo_Title} onChange={dealChange_SecondSection_ConceptTwo_Title} />
                            </h5>
                            <h5>Second section Concept Two:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptTwo} onChange={dealChange_SecondSection_ConceptTwo} />
                            </h5>
                            <h5>Second section Concept Three Title:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptThree_Title} onChange={dealChange_SecondSection_ConceptThree_Title} />
                            </h5>
                            <h5>Second section Concept Three:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptThree} onChange={dealChange_SecondSection_ConceptThree} />
                            </h5>
                            <h5>Second section Concept Four Title:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptFour_Title} onChange={dealChange_SecondSection_ConceptFour_Title} />
                            </h5>
                            <h5>Second section Concept Four:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptFour} onChange={dealChange_SecondSection_ConceptFour} />
                            </h5>
                            <h5>Second section Concept Five Title:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptFive_Title} onChange={dealChange_SecondSection_ConceptFive_Title} />
                            </h5>
                            <h5>Second section Concept Five:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptFive} onChange={dealChange_SecondSection_ConceptFive} />
                            </h5>
                            <h5>Second section Concept Six Title:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptSix_Title} onChange={dealChange_SecondSection_ConceptSix_Title} />
                            </h5>
                            <h5>Second section Concept Six:
                                <input type="text" name="" id="" value={input_SecondSection_ConceptSix} onChange={dealChange_SecondSection_ConceptSix} />
                            </h5>
                            <hr className="mx-5" />
                            <button> Enviar </button>
                        </div>
                    </form>
                    <form onSubmit={handleSubmitThirdSection}>
                        <div>
                            <h4>Third section Title:
                                <input type="text" name="" id="" value={input_ThirdSection_MainTitle} onChange={dealChange_ThirdSection_Title} />
                            </h4>
                            <h5>Third section Description:
                                <input type="text" name="" id="" value={input_ThirdSection_Description} onChange={dealChange_ThirdSection_Description} />
                            </h5>
                            <h5>Third section left concept One BlueHighlightText
                                <input type="text" name="" id="" value={input_ThirdSection_LeftConceptOne_BlueHighlightText} onChange={dealChange_ThirdSection_LeftConceptOne_BlueHighlightText} />
                            </h5>
                            <h5>Third section left concept One Title
                                <input type="text" name="" id="" value={input_ThirdSection_LeftConceptOne_Title} onChange={dealChange_ThirdSection_LeftConceptOne_Title} />
                            </h5>
                            <h5>Third section left concept One Description
                                <input type="text" name="" id="" value={input_ThirdSection_LeftConceptOne_Description} onChange={dealChange_ThirdSection_LeftConceptOne_Description} />
                            </h5>
                            <h5>Third section right concept Two BlueHighlightText
                                <input type="text" name="" id="" value={input_ThirdSection_RightConceptTwo_BlueHighlightText} onChange={dealChange_ThirdSection_RightConceptTwo_BlueHighlightText} />
                            </h5>
                            <h5>Third section right concept Two Title
                                <input type="text" name="" id="" value={input_ThirdSection_RightConceptTwo_Title} onChange={dealChange_ThirdSection_RightConceptTwo_Title} />
                            </h5>
                            <h5>Third section right concept Two Description
                                <input type="text" name="" id="" value={input_ThirdSection_RightConceptTwo_Description} onChange={dealChange_ThirdSection_RightConceptTwo_Description} />
                            </h5>
                            <h5>Third section left concept Three BlueHighlightText
                                <input type="text" name="" id="" value={input_ThirdSection_LeftConceptThree_BlueHighlightText} onChange={dealChange_ThirdSection_LeftConceptThree_BlueHighlightText} />
                            </h5>
                            <h5>Third section left concept Three Title
                                <input type="text" name="" id="" value={input_ThirdSection_LeftConceptThree_Title} onChange={dealChange_ThirdSection_LeftConceptThree_Title} />
                            </h5>
                            <h5>Third section left concept Three Description
                                <input type="text" name="" id="" value={input_ThirdSection_LefttConceptThree_Description} onChange={dealChange_ThirdSection_LefttConceptThree_Description} />
                            </h5>
                            <hr className="mx-5" />
                            <button> Enviar </button>
                        </div>
                    </form>
                    <form onSubmit={handleSubmitFourthSection}>
                        <div>
                            <h4>Fourth section Testimonial Title:
                                <input type="text" name="" id="" value={input_FourthSection_TestimonialsMainTitle} onChange={dealChange_FourthSection_TestimonialsMainTitle} />
                            </h4>
                            <h5>Fourth section Description:
                                <input type="text" name="" id="" value={input_FourthSection_TestimonialsDescription} onChange={dealChange_fourthSection_TestimonialsDescription} />
                            </h5> 
                            <h5>Fourth section Card One Text:
                                <input type="text" name="" id="" value={input_FourthSection_CardOneText} onChange={dealChange_fourthSection_CardOneText} />
                            </h5>
                            <h5>Fourth section Card One Person Name:
                                <input type="text" name="" id="" value={input_FourthSection_CardOne_Person} onChange={dealChange_fourthSection_CardOne_Person} />
                            </h5>
                            <h5>Fourth section Card Two Text:
                                <input type="text" name="" id="" value={input_FourthSection_CardTwoText} onChange={dealChange_fourthSection_CardTwoText} />
                            </h5>
                            <h5>Fourth section Card Two Person Name:
                                <input type="text" name="" id="" value={input_FourthSection_CardTwo_Person} onChange={dealChange_fourthSection_CardTwo_Person} />
                            </h5>
                            <h5>Fourth section Card Three Text:
                                <input type="text" name="" id="" value={input_FourthSection_CardThreeText} onChange={dealChange_fourthSection_CardThreeText} />
                            </h5>
                            <h5>Fourth section Card Three Person Name:
                                <input type="text" name="" id="" value={input_FourthSection_CardThree_Person} onChange={dealChange_fourthSection_CardThree_Person} />
                            </h5>
                            <hr className="mx-5" />
                            <button> Enviar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form
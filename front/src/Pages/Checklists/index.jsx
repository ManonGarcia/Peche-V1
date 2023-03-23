import React from "react";
import BannerChecklists from "../../componants/Banner/checklistsBanner";
import ChecklistDebutant from "../../assets/debutant_carpe.jpg";
import ChecklistExpert from "../../assets/expert_carpe.jpg";

function Checklists() {
    return (
        <div className="bloc_checklists">
            <div>
                <BannerChecklists />
            </div>
            <h1>Voici nos exemples de checklists pour la pêche à la carpe :</h1>
            <p className="checklist_title_text">Allez-y, téléchargez-les ! Ca vaut le coup ;)</p>
            <div className="checklists_flex">
                <div className="checklist">
                    <h2>La Checklist Débutant !</h2>
                    <div>
                        <p></p>
                        <img src={ChecklistDebutant} alt="" />
                    </div>
                </div>
                <div className="checklist">
                    <h2>La Checklist Expert !</h2>
                    <div>
                        <p></p>
                        <img src={ChecklistExpert} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Checklists;
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../json";
import { themeJson } from "../theme";
import {
  // doc,
  addDoc,
  collection,
  // getDocs,
  // getDoc,
  // query,
  // serverTimestamp,
  // where,
} from "firebase/firestore";
import { db } from "../firebase-app/firebase-config";

function Sevices() {
  const survey = new Model(json);
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender) => {
    addSurveyHandle(sender);
  });

  const addSurveyHandle = async (values) => {
    const modelJson = JSON.stringify(values.data, null, 3);
    const modelParse = JSON.parse(modelJson);
    const colRef = collection(db, "patients");
    await addDoc(colRef, {
      ...modelParse,
    });
  };
  return <Survey model={survey} />;
}

export default Sevices;

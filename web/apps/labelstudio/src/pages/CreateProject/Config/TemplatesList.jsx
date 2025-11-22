import React from "react";
import { Spinner } from "../../../components";
import { useAPI } from "../../../providers/ApiProvider";
import { cn } from "../../../utils/bem";
import "./Config.scss";
import { IconInfo } from "@humansignal/icons";
import { Button } from "@humansignal/ui";
import { defaultT } from "../../../utils/scripts";
import { useTranslation } from "react-i18next";

const listClass = cn("templates-list");

const Arrow = () => (
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Arrow Icon</title>
    <path opacity="0.9" d="M2 10L6 6L2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

const TemplatesInGroup = ({ templates, group, onSelectRecipe }) => {
  const picked = templates
    .filter((recipe) => recipe.group === group)
    // templates without `order` go to the end of the list
    .sort((a, b) => (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY));

  return (
    <ul>
      {picked.map((recipe) => (
        <li key={recipe.title} onClick={() => onSelectRecipe(recipe)} className={listClass.elem("template")}>
          <img src={recipe.image} alt={""} />
          <h3>{recipe.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export const TemplatesList = ({ selectedGroup, selectedRecipe, onCustomTemplate, onSelectGroup, onSelectRecipe }) => {
  const { t } = useTranslation();
  const [groups, setGroups] = React.useState([]);
  const [templates, setTemplates] = React.useState();
  const api = useAPI();

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await api.callApi("configTemplates");

      if (!res) return;
      const { templates, groups } = res;
      const templatesTransObj = {
        ["Automatic Speech Recognition"]: defaultT(t, "pages.create_project.config_label.Automatic_Speech_Recognition", "Automatic Speech Recognition"),
        ["Automatic Speech Recognition using Segments"]: defaultT(t, "pages.create_project.config_label.Automatic_Speech_Recognition_using_Segments", "Automatic Speech Recognition using Segments"),
        ["Conversational Analysis"]: defaultT(t, "pages.create_project.config_label.Conversational_Analysis", "Conversational Analysis"),
        ["Intent Classification"]: defaultT(t, "pages.create_project.config_label.Intent_Classification", "Intent Classification"),
        ["Signal Quality Detection"]: defaultT(t, "pages.create_project.config_label.Signal_Quality_Detection", "Signal Quality Detection"),
        ["Sound Event Detection"]: defaultT(t, "pages.create_project.config_label.Sound_Event_Detection", "Sound Event Detection"),
        ["Speaker Segmentation"]: defaultT(t, "pages.create_project.config_label.Speaker_Segmentation", "Speaker Segmentation"),
        ["Speech Transcription"]: defaultT(t, "pages.create_project.config_label.Speech_Transcription", "Speech Transcription"),
        ["Image Captioning"]: defaultT(t, "pages.create_project.config_label.Image_Captioning", "Image Captioning"),
        ["Image Classification"]: defaultT(t, "pages.create_project.config_label.Image_Classification", "Image Classification"),
        ["Inventory Tracking"]: defaultT(t, "pages.create_project.config_label.Inventory_Tracking", "Inventory Tracking"),
        ["Keypoint Labeling"]: defaultT(t, "pages.create_project.config_label.Keypoint_Labeling", "Keypoint Labeling"),
        ["Medical Image Classification with Bounding Boxes"]: defaultT(t, "pages.create_project.config_label.Medical_Image_Classification_with_Bounding_Boxes", "Medical Image Classification with Bounding Boxes"),
        ["Multi-page document annotation"]: defaultT(t, "pages.create_project.config_label.Multi-page_document_annotation", "Multi-page document annotation"),
        ["Object Detection with Bounding Boxes"]: defaultT(t, "pages.create_project.config_label.Object_Detection_with_Bounding_Boxes", "Object Detection with Bounding Boxes"),
        ["Optical Character Recognition"]: defaultT(t, "pages.create_project.config_label.Optical_Character_Recognition", "Optical Character Recognition"),
        ["Semantic Segmentation with Masks"]: defaultT(t, "pages.create_project.config_label.Semantic_Segmentation_with_Masks", "Semantic Segmentation with Masks"),
        ["Semantic Segmentation with Polygons"]: defaultT(t, "pages.create_project.config_label.Semantic_Segmentation_with_Polygons", "Semantic Segmentation with Polygons"),
        ["Visual Genome"]: defaultT(t, "pages.create_project.config_label.Visual_Genome", "Visual Genome"),
        ["Visual Question Answering"]: defaultT(t, "pages.create_project.config_label.Visual_Question_Answering", "Visual Question Answering"),
        ["Coreference Resolution & Entity Linking"]: defaultT(t, "pages.create_project.config_label.Coreference_Resolution_&_Entity_Linking", "Coreference Resolution & Entity Linking"),
        ["Intent Classification and Slot Filling"]: defaultT(t, "pages.create_project.config_label.Intent_Classification_and_Slot_Filling", "Intent Classification and Slot Filling"),
        ["Response Generation"]: defaultT(t, "pages.create_project.config_label.Response_Generation", "Response Generation"),
        ["Response Selection"]: defaultT(t, "pages.create_project.config_label.Response_Selection", "Response Selection"),
        ["Chatbot Model Assessment"]: defaultT(t, "pages.create_project.config_label.Chatbot_Model_Assessment", "Chatbot Model Assessment"),
        ["Human Preference collection for RLHF"]: defaultT(t, "pages.create_project.config_label.Human_Preference_collection_for_RLHF", "Human Preference collection for RLHF"),
        ["LLM Ranker"]: defaultT(t, "pages.create_project.config_label.LLM_Ranker", "LLM Ranker"),
        ["LLM Response Grading"]: defaultT(t, "pages.create_project.config_label.LLM_Response_Grading", "LLM Response Grading"),
        ["Supervised Language Model Fine-tuning"]: defaultT(t, "pages.create_project.config_label.Supervised_Language_Model_Fine-tuning", "Supervised Language Model Fine-tuning"),
        ["Visual Ranker"]: defaultT(t, "pages.create_project.config_label.Visual_Ranker", "Visual Ranker"),
        ["Content Moderation"]: defaultT(t, "pages.create_project.config_label.Content_Moderation", "Content Moderation"),
        ["Machine Translation"]: defaultT(t, "pages.create_project.config_label.Machine_Translation", "Machine Translation"),
        ["Named Entity Recognition"]: defaultT(t, "pages.create_project.config_label.Named_Entity_Recognition", "Named Entity Recognition"),
        ["Question Answering"]: defaultT(t, "pages.create_project.config_label.Question_Answering", "Question Answering"),
        ["Relation Extraction"]: defaultT(t, "pages.create_project.config_label.Relation_Extraction", "Relation Extraction"),
        ["Taxonomy"]: defaultT(t, "pages.create_project.config_label.Taxonomy", "Taxonomy"),
        ["Text Classification"]: defaultT(t, "pages.create_project.config_label.Text_Classification", "Text Classification"),
        ["Text Summarization"]: defaultT(t, "pages.create_project.config_label.Text_Summarization", "Text Summarization"),
        ["ASR Hypotheses Selection"]: defaultT(t, "pages.create_project.config_label.ASR_Hypotheses_Selection", "ASR Hypotheses Selection"),
        ["Content-based Image Retrieval"]: defaultT(t, "pages.create_project.config_label.Content-based_Image_Retrieval", "Content-based Image Retrieval"),
        ["Document Retrieval"]: defaultT(t, "pages.create_project.config_label.Document_Retrieval", "Document Retrieval"),
        ["Pairwise classification"]: defaultT(t, "pages.create_project.config_label.Pairwise_classification", "Pairwise classification"),
        ["Pairwise regression"]: defaultT(t, "pages.create_project.config_label.Pairwise_regression", "Pairwise regression"),
        ["Search Page Ranking"]: defaultT(t, "pages.create_project.config_label.Search_Page_Ranking", "Search Page Ranking"),
        ["Text-to-Image Generation"]: defaultT(t, "pages.create_project.config_label.Text-to-Image_Generation", "Text-to-Image Generation"),
        ["Freeform Metadata"]: defaultT(t, "pages.create_project.config_label.Freeform_Metadata", "Freeform Metadata"),
        ["HTML Entity Recognition"]: defaultT(t, "pages.create_project.config_label.HTML_Entity_Recognition", "HTML Entity Recognition"),
        ["PDF Classification"]: defaultT(t, "pages.create_project.config_label.PDF_Classification", "PDF Classification"),
        ["Tabular Data"]: defaultT(t, "pages.create_project.config_label.Tabular_Data", "Tabular Data"),
        ["Activity Recognition"]: defaultT(t, "pages.create_project.config_label.Activity_Recognition", "Activity Recognition"),
        ["Change Point Detection"]: defaultT(t, "pages.create_project.config_label.Change_Point_Detection", "Change Point Detection"),
        ["Outliers & Anomaly Detection"]: defaultT(t, "pages.create_project.config_label.Outliers_&_Anomaly_Detection", "Outliers & Anomaly Detection"),
        ["Signal Quality"]: defaultT(t, "pages.create_project.config_label.Signal_Quality", "Signal Quality"),
        ["Time Series Forecasting"]: defaultT(t, "pages.create_project.config_label.Time_Series_Forecasting", "Time Series Forecasting"),
        ["Video Classification"]: defaultT(t, "pages.create_project.config_label.Video_Classification", "Video Classification"),
        ["Video Frame Classification"]: defaultT(t, "pages.create_project.config_label.Video_Frame_Classification", "Video Frame Classification"),
        ["Video Object Tracking"]: defaultT(t, "pages.create_project.config_label.Video_Object_Tracking", "Video Object Tracking"),
        ["Video Timeline Segmentation"]: defaultT(t, "pages.create_project.config_label.Video_Timeline_Segmentation", "Video Timeline Segmentation")
      };
      templates.forEach(item => {
        if (!item?.title) return;
        item.title = templatesTransObj[item.title] ?? item.title
      })
      setTemplates(templates); // 接口给的数据不好翻译
      setGroups(groups);
    };
    fetchData();
  }, []);

  const selected = selectedGroup || groups[0];

  const groupTransObj = {
    ["Computer Vision"]: defaultT(t, "pages.create_project.config_label.Computer_Vision", "Computer Vision"),
    ["Natural Language Processing"]: defaultT(t, "pages.create_project.config_label.Natural_Language_Processing", "Natural Language Processing"),
    ["Audio/Speech Processing"]: defaultT(t, "pages.create_project.config_label.Audio/Speech_Processing", "Audio/Speech Processing"),
    ["Conversational AI"]: defaultT(t, "pages.create_project.config_label.Conversational_AI", "Conversational AI"),
    ["Ranking & Scoring"]: defaultT(t, "pages.create_project.config_label.Ranking_&_Scoring", "Ranking & Scoring"),
    ["Structured Data Parsing"]: defaultT(t, "pages.create_project.config_label.Structured_Data_Parsing", "Structured Data Parsing"),
    ["Time Series Analysis"]: defaultT(t, "pages.create_project.config_label.Time_Series_Analysis", "Time Series Analysis"),
    ["Videos"]: defaultT(t, "pages.create_project.config_label.Videos", "Videos"),
    ["Generative AI"]: defaultT(t, "pages.create_project.config_label.Generative_AI", "Generative AI")
  }

  return (
    <div className={listClass}>
      <aside className={listClass.elem("sidebar")}>
        <ul>
          {groups.map((group) => (
            <li
              key={group}
              onClick={() => onSelectGroup(group)}
              className={listClass.elem("group").mod({
                active: selected === group,
                selected: selectedRecipe?.group === group,
              })}
            >
              {groupTransObj[group] ?? group}
              <Arrow />
            </li>
          ))}
        </ul>
        <Button
          type="button"
          align="left"
          look="string"
          size="small"
          onClick={onCustomTemplate}
          className="w-full"
          aria-label="Create custom template"
        >
          {defaultT(t, "pages.create_project.config_label.custom_template", "Custom template")}
        </Button>
      </aside>
      <main>
        {!templates && <Spinner style={{ width: "100%", height: 200 }} />}
        <TemplatesInGroup templates={templates || []} group={selected} onSelectRecipe={onSelectRecipe} />
      </main>
      <footer className="flex items-center justify-center gap-1">
        <IconInfo className={listClass.elem("info-icon")} width="20" height="20" />
        <span>
          {defaultT(t, "pages.create_project.import_data.footer_msg_part1", "See the documentation to")}{" "}
          <a href="https://labelstud.io/guide" target="_blank" rel="noreferrer">
            {defaultT(t, "pages.create_project.config_label.footer_mst_part2", "contribute a template")}
          </a>
          .
        </span>
      </footer>
    </div>
  );
};

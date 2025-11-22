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

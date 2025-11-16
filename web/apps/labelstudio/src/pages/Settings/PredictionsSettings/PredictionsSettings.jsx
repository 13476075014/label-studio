import { useCallback, useContext, useEffect, useState } from "react";
import { Divider } from "../../../components/Divider/Divider";
import { EmptyState } from "../../../components/EmptyState/EmptyState";
import { IconPredictions, Typography } from "@humansignal/ui";
import { useAPI } from "../../../providers/ApiProvider";
import { ProjectContext } from "../../../providers/ProjectProvider";
import { Spinner } from "../../../components/Spinner/Spinner";
import { PredictionsList } from "./PredictionsList";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../utils/scripts";
import i18n from "i18next"
const t = i18n.t.bind(i18n)

export const PredictionsSettings = () => {
  const { t } = useTranslation();
  const api = useAPI();
  const { project } = useContext(ProjectContext);
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fetchVersions = useCallback(async () => {
    setLoading(true);
    const versions = await api.callApi("projectModelVersions", {
      params: {
        pk: project.id,
        extended: true,
      },
    });

    if (versions) setVersions(versions.static);
    setLoading(false);
    setLoaded(true);
  }, [project, setVersions]);

  useEffect(() => {
    if (project.id) {
      fetchVersions();
    }
  }, [project]);

  return (
    <section className="max-w-[42rem]">
      <Typography variant="headline" size="medium" className="mb-tight">
        {defaultT(t, "pages.settings.predictions.title",
          "Predictions")}
      </Typography>
      <div>
        {loading && <Spinner size={32} />}

        {loaded && versions.length > 0 && (
          <>
            <Typography variant="title" size="medium">
              {defaultT(t, "pages.settings.predictions.list",
          "Predictions List")}
            </Typography>
            <Typography size="small" className="text-neutral-content-subtler mt-base mb-wider">
              {defaultT(t, "pages.settings.predictions.description1",
          "List of predictions available in the project. Each card is associated with a separate model version. To learn about how to import predictions")},{" "}
              <a href="https://labelstud.io/guide/predictions.html" target="_blank" rel="noreferrer">
                {defaultT(t, "pages.settings.predictions.see_documentation",
          "see&nbsp;the&nbsp;documentation")}
              </a>
              .
            </Typography>
          </>
        )}

        {loaded && versions.length === 0 && (
          <EmptyState
            icon={<IconPredictions />}
            title={defaultT(t, "pages.settings.predictions.no_predictions",
          "No predictions yet uploaded")}
            description={defaultT(t, "pages.settings.predictions.description2",
          "Predictions could be used to prelabel the data, or validate the model. You can upload and select predictions from multiple model versions. You can also connect live models in the Model tab.")}
            footer={
              <div>
                {defaultT(t, "pages.settings.predictions.need_help",
          "Need help")}?
                <br />
                <a href="https://labelstud.io/guide/predictions" target="_blank" rel="noreferrer">
                  {defaultT(t, "pages.settings.predictions.learn_more_about_predictions",
          "Learn more on how to upload predictions in our docs")}
                </a>
              </div>
            }
          />
        )}

        <PredictionsList project={project} versions={versions} fetchVersions={fetchVersions} />

        <Divider height={32} />
      </div>
    </section>
  );
};

PredictionsSettings.title = defaultT(t, "pages.settings.predictions.title",
          "Predictions");
PredictionsSettings.path = "/predictions";

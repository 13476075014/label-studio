import { EnterpriseBadge, Select, Typography } from "@humansignal/ui";
import { useCallback, useContext } from "react";
import { Button } from "@humansignal/ui";
import { Form, Input, TextArea } from "../../components/Form";
import { RadioGroup } from "../../components/Form/Elements/RadioGroup/RadioGroup";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Block, Elem } from "../../utils/bem";
import { HeidiTips } from "../../components/HeidiTips/HeidiTips";
import { FF_LSDV_E_297, isFF } from "../../utils/feature-flags";
import { createURL } from "../../components/HeidiTips/utils";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../utils/scripts";
import i18n from "i18next";

export const GeneralSettings = () => {
  const { t } = useTranslation();
  const { project, fetchProject } = useContext(ProjectContext);

  const updateProject = useCallback(() => {
    if (project.id) fetchProject(project.id, true);
  }, [project]);

  const colors = ["#FDFDFC", "#FF4C25", "#FF750F", "#ECB800", "#9AC422", "#34988D", "#617ADA", "#CC6FBE"];

  const samplings = [
    { value: "Sequential", label: "Sequential", description: "Tasks are ordered by Task ID" },
    { value: "Uniform", label: "Random", description: "Tasks are chosen with uniform random" },
  ];

  return (
    <Block name="general-settings">
      <Elem name={"wrapper"}>
        <h1>{defaultT(t, "pages.settings.general.title", "General Settings")}</h1>
        <Block name="settings-wrapper">
          <Form action="updateProject" formData={{ ...project }} params={{ pk: project.id }} onSubmit={updateProject}>
            <Form.Row columnCount={1} rowGap="16px">
              <Input name="title" label={defaultT(t, "pages.settings.general.project_name", "Project Name")} />

              <TextArea name="description" label={defaultT(t, "pages.settings.general.description", "Description")} style={{ minHeight: 128 }} />
              {isFF(FF_LSDV_E_297) && (
                <Block name="workspace-placeholder">
                  <Elem name="badge-wrapper">
                    <Elem name="title">{defaultT(t, "pages.settings.general.workspace", "Workspace")}</Elem>
                    <EnterpriseBadge className="ml-2" />
                  </Elem>
                  <Select placeholder={defaultT(t, "pages.settings.general.select_option", "Select an option")} disabled options={[]} />
                  <Typography size="small" className="my-tight">
                    {defaultT(t, "pages.settings.general.workspace_tip", "Simplify project management by organizing projects into workspaces")}.{" "}
                    <a
                      target="_blank"
                      href={createURL(
                        "https://docs.humansignal.com/guide/manage_projects#Create-workspaces-to-organize-projects",
                        {
                          experiment: "project_settings_tip",
                          treatment: "simplify_project_management",
                        },
                      )}
                      rel="noreferrer"
                      className="underline hover:no-underline"
                    >
                      {defaultT(t, "pages.settings.general.learn_more", "Learn more")}
                    </a>
                  </Typography>
                </Block>
              )}
              <RadioGroup name="color" label={defaultT(t, "pages.settings.general.color", "Color")} size="large" labelProps={{ size: "large" }}>
                {colors.map((color) => (
                  <RadioGroup.Button key={color} value={color}>
                    <Block name="color" style={{ "--background": color }} />
                  </RadioGroup.Button>
                ))}
              </RadioGroup>

              <RadioGroup label={defaultT(t, "pages.settings.general.task_sampling", "Task Sampling")} labelProps={{ size: "large" }} name="sampling" simple>
                {samplings.map(({ value, label, description }) => (
                  <RadioGroup.Button
                    key={value}
                    value={`${value} sampling`}
                    label={`${label} sampling`}
                    description={description}
                  />
                ))}
                {isFF(FF_LSDV_E_297) && (
                  <RadioGroup.Button
                    key="uncertainty-sampling"
                    value=""
                    label={
                      <>
                        {defaultT(t, "pages.settings.general.uncertainty_sampling", "Uncertainty sampling")} <EnterpriseBadge className="ml-2" />
                      </>
                    }
                    disabled
                    description={
                      <>
                        {defaultT(t, "pages.settings.general.uncertainty_sampling_desc", "Tasks are chosen according to model uncertainty score (active learning mode)")}.{" "}
                        <a
                          target="_blank"
                          href={createURL("https://docs.humansignal.com/guide/active_learning", {
                            experiment: "project_settings_workspace",
                            treatment: "workspaces",
                          })}
                          rel="noreferrer"
                        >
                          {defaultT(t, "pages.settings.general.learn_more", "Learn more")}
                        </a>
                      </>
                    }
                  />
                )}
              </RadioGroup>
            </Form.Row>

            <Form.Actions>
              <Form.Indicator>
                <span case="success">{defaultT(t, "pages.settings.general.saved", "Saved")}!</span>
              </Form.Indicator>
              <Button type="submit" className="w-[150px]" aria-label="Save general settings">
                {defaultT(t, "pages.settings.general.save", "Save")}
              </Button>
            </Form.Actions>
          </Form>
        </Block>
      </Elem>
      {isFF(FF_LSDV_E_297) && <HeidiTips collection="projectSettings" />}
    </Block>
  );
};

GeneralSettings.menuItem = defaultT(i18n.t.bind(i18n), "pages.settings.general.menu", "General");
GeneralSettings.path = "/";
GeneralSettings.exact = true;

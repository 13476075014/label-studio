import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Button } from "@humansignal/ui";
import { Form, TextArea, Toggle } from "../../components/Form";
import { MenubarContext } from "../../components/Menubar/Menubar";
import { Block, Elem } from "../../utils/bem";

import { ModelVersionSelector } from "./AnnotationSettings/ModelVersionSelector";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Divider } from "../../components/Divider/Divider";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../utils/scripts";
import i18n from "i18next";


export const AnnotationSettings = () => {
  const { t } = useTranslation();
  const { project, fetchProject } = useContext(ProjectContext);
  const pageContext = useContext(MenubarContext);
  const formRef = useRef();
  const [collab, setCollab] = useState(null);

  useEffect(() => {
    pageContext.setProps({ formRef });
  }, [formRef]);

  const updateProject = useCallback(() => {
    fetchProject(project.id, true);
  }, [project]);

  return (
    <Block name="annotation-settings">
      <Elem name={"wrapper"}>
        <h1>{defaultT(t, "pages.settings.annotation.title", "Annotation Settings")}</h1>
        <Block name="settings-wrapper">
          <Form
            ref={formRef}
            action="updateProject"
            formData={{ ...project }}
            params={{ pk: project.id }}
            onSubmit={updateProject}
          >
            <Form.Row columnCount={1}>
              <Elem name={"header"}>{defaultT(t, "pages.settings.annotation.header_labeling_instructions", "Labeling Instructions")}</Elem>
              <div class="settings-description">
                <p style={{ marginBottom: "0" }}>
                  {defaultT(t, "pages.settings.annotation.instructions_p1", "Write instructions to help users complete labeling tasks.")}
                </p>
                <p style={{ marginTop: "8px" }}>
                  {defaultT(t, "pages.settings.annotation.instructions_p2", "The instruction field supports HTML markup and it allows use of images, iframes (pdf).")}
                </p>
              </div>
              <div>
                <Toggle label={defaultT(t, "pages.settings.annotation.show_before_labeling", "Show before labeling")} name="show_instruction" />
              </div>
              <TextArea name="expert_instruction" style={{ minHeight: 128, maxWidth: "520px" }} />
            </Form.Row>

            <Divider height={32} />

            <Form.Row columnCount={1}>
              <br />
              <Elem name={"header"}>{defaultT(t, "pages.settings.annotation.prelabeling", "Prelabeling")}</Elem>
              <div>
                <Toggle
                  label="Use predictions to prelabel tasks"
                  description={<span>{defaultT(t, "pages.settings.annotation.use_predictions_prelabel_description", "Enable and select which set of predictions to use for prelabeling.")}</span>}
                  name="show_collab_predictions"
                  onChange={(e) => {
                    setCollab(e.target.checked);
                  }}
                />
              </div>

              {(collab !== null ? collab : project.show_collab_predictions) && <ModelVersionSelector />}
            </Form.Row>

            <Form.Actions>
              <Form.Indicator>
                <span case="success">{defaultT(t, "pages.settings.annotation.saved", "Saved!")}!</span>
              </Form.Indicator>
              <Button type="submit" look="primary" className="w-[150px]" aria-label="Save annotation settings">
                {defaultT(t, "pages.settings.annotation.save", "Save")}
              </Button>
            </Form.Actions>
          </Form>
        </Block>
      </Elem>
    </Block>
  );
};

AnnotationSettings.title = defaultT(i18n.t.bind(i18n), "pages.settings.annotation.title", "Annotation");
AnnotationSettings.path = "/annotation";

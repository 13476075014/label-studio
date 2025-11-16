import { EnterpriseBadge, IconSpark } from "@humansignal/ui";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@humansignal/shad/components/ui/alert";
import { IconCloudProviderS3 } from "@humansignal/icons";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

const s3sProvider: ProviderConfig = {
  name: "s3s",
  title: defaultT(
    t,
    "pages.settings.storage.amazon_s3_with_iam_role",
    "Amazon S3\nwith IAM Role"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.configure_your_aws_s3_connection_using_iam_role_access_for_enhanced_security_proxy_only",
    "Configure your AWS S3 connection using IAM role access for enhanced security (proxy only)"
  ),
  icon: IconCloudProviderS3,
  disabled: true,
  badge: <EnterpriseBadge />,
  fields: [
    {
      name: "enterprise_info",
      type: "message",
      content: (
        <Alert variant="gradient">
          <IconSpark />
          <AlertTitle>
            {defaultT(
              t,
              "pages.settings.storage.enterprise_feature",
              "Enterprise Feature"
            )}
          </AlertTitle>
          <AlertDescription>
            {defaultT(
              t,
              "pages.settings.storage.amazon_s3_with_iam_role_available_in_label_studio_enterprise",
              "Amazon S3 with IAM Role is available in Label Studio Enterprise."
            )}{" "}
            <a
              href="https://docs.humansignal.com/guide/storage.html#Set-up-an-S3-connection-with-IAM-role-access"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              {defaultT(t, "common.learn_more", "Learn more")}
            </a>
          </AlertDescription>
        </Alert>
      ),
    },
  ],
  layout: [{ fields: ["enterprise_info"] }],
};

export default s3sProvider;

import { de } from "date-fns/locale";
import { all } from "libs/datamanager/src/utils/utils";
import { title } from "process";

export const TRANSLATIONS_EN = {
  common: {
    or: "or",
    cancel: "Cancel",
    import: "Import",
    export: "Export",
    labeling: "Labeling",
    labeling_instructions: "Labeling Instructions",
    instructions: "Instructions",
    add: "Add",
    saved: "Saved",
    save: "Save",
    saveAndSync: "Save & Sync",
    edit: "Edit",
    delete: "Delete",
    connect: "Connect",
    model: "Model",
    target: "Target",
    source: "Source",
    storage: "Storage",
    learn_more: "Learn more",
    previous: "Previous",
    connectionVerified: "Connection Verified",
    testConnection: "Test Connection",
    previewLoaded: "✓ Preview Loaded",
    loadPreview: "Load Preview",
    next: "Next",
    name: "Name",
    media_file_type: {
      Text: "Text",
      Audio: "Audio",
      Images: "Images",
      HTML: "HTML",
      TimeSeries: "Time Series",
      CommonFormats: "Common Formats",
    },
    tags: {
      title: {
        "Width of region borders": "Width of region borders",
        "Allow image zoom (ctrl+wheel)": "Allow image zoom (ctrl+wheel)",
        "Show controls to zoom in and out": "Show controls to zoom in and out",
        "Show controls to rotate image": "Show controls to rotate image",
        "Select text by words": "Select text by words",
        "Add filter for long list of labels":
          "Add filter for long list of labels",
        "Display labels": "Display labels",
      },
      "Display labels": {
        bottom: "bottom",
        left: "left",
        right: "right",
        top: "top",
      },
    },
  },
  components: {
    menubar: {
      home: "Home",
      projects: "Projects",
      organization: "Organization",
      api: "API",
      docs: "Docs",
      pin_menu: "Pin menu",
      unpin_menu: "Unpin menu",
      slack_community: "Slack Community",
      please_check_new_notice:
        "Please check new notification settings in the Account & Settings page",
      hotkeys_tooltip: "Keyboard Shortcuts",
      account_settings: "Account &amp; Settings",
    },
  },
  pages: {
    home: {
      title: "Home",
      documentation: "Documentation",
      api_documentation: "API Documentation",
      release_notes: "Release Notes",
      lb_blog: "LabelStud.io Blog",
      slack_community: "Slack Community",
      welcome: "Welcome",
      lets_get_started: "Let's get you started",
      recent_projects: "Recent Projects",
      view_all: "View All",
      p1: "can't load projects",
      first_project: "Create your first project",
      p2: "Import your data and set up the labeling interface to start annotating",
      create_project: "Create Project",
      p3: "Label Studio Version: Community",
      resources: "Resources",
      get_help: "Learn, explore and get help",
      invite_people: "Invite People",
      tasks: "Tasks",
      invite: {
        p1: "Invite people to join your Label Studio instance. People that you invite have full access to all of your projects",
        invite_people: "Invite People",
        copied: "Copied!",
        copy_link: "Copy link",
      },
    },
    projects: {
      title: "Projects",
      create: "Create",
      new_project: "New project",
      settings: "Settings",
      label: "Label",
      empty_projects_list: {
        msg_part1: "Heidi doesn’t see any projects here",
        msg_part2: "Create one and start labeling your data",
        create_project: "Create Project",
      },
    },
    create_project: {
      title: "Create Project",
      steps: {
        name: "Project Name",
        import: "Data Import",
        config: "Labeling Setup",
        save: "Save",
        cancel: "Cancel",
      },
      project_name: {
        name_title: "Project Name",
        description_title: "Description",
        description_placeholder: "Optional description of your project",
        Workspace: "Workspace",
      },
      import_data: {
        title: "Import Data",
        dataset_url: "Dataset URL",
        add_url: "Add URL",
        or: "or",
        upload: "Upload ",
        more: "More ",
        files: "Files",
        upload_file_msg1: "Drag & drop files here",
        upload_file_msg: "or click to browse",
        footer_msg_part1: "See the documentation to ",
        footer_msg_part2: "import preannotated data ",
        footer_msg_part3: " or to ",
        footer_msg_part4: "sync data from a database or cloud storage.",
        p1: 'The filetype of file "{{name}}" is not supported.',
        csv_as: "Treat CSV/TSV as",
        list_of_tasks: "List of tasks",
        time_series_or_whole_text_file: "Time Series or Whole Text File",
        images: "Images",
        audio: "Audio",
        text: "Text",
        video: "Video",
        html_type: "HTML / HyperText",
        structured_data: "Structured data",
        pdf: "PDF",
        important: "Important",
        we_recommend: "We recommend",

        cloud_storage: "Cloud Storage",
        over_direct_uploads_due_to: "over direct uploads due to",
        upload_limitations: "upload limitations",
        for_pDFs_use: "For PDFs, use",
        multi_image_labeling: "multi-image labeling",
        json_parquet:
          "JSONL or Parquet (Enterprise only) files require cloud storage",
        check_document: "Check the documentation to",
        import_preannot: "import preannotated data",
        sample: "Sample",
        something_wrong_loaded:
          "Something went wrong, the sample data could not be loaded",
        setup_you: "Setup your",
        label_config: "labeling configuration",
        first_preview_format: "first to preview the expected JSON data format",
      },
      config_label: {
        custom_template: "Custom template",
        footer_mst_part1: "See the documentation to ",
        footer_mst_part2: "contribute a template.",
        browse_templates: "Browse Templates",
        code: "Code",
        visual: "Visual",
        configure_data: "Configure data",
        require_more_data:
          "This template requires more data then you have for now",
        need_upload_data:
          "To select which field(s) to label you need to upload the data. Alternatively, you can provide it using Code mode.",
        add: "Add",
        add_choices: "Add choices",
        add_label_names: "Add label names",
        configure_settings: "Configure settings",
        ui_preview: "UI Preview",
        empty_config_placeholder:
          "Your labeling configuration is empty. It is required to label your data. ",
        empty_config_starting_info:
          "Start from one of our predefined templates or create your own config on the Code panel. The labeling config is XML-based and you can",
        empty_config_read_docs:
          "read about the available tags in our documentation",
        use_new_line_as_separator:
          "Use new line as a separator to add multiple labels",
        use: "Use",
        configure_labeling_interface:
          "Configure the labeling interface with tags.",
        see_all_available_tags: "See all available tags",
        saved: "Saved",
        saving: "Saving...",
        save: "Save",
      },
      draft: {
        name: "New Project",
      },
      delete_button: "Delete",
      save_button: "Save",
    },
    login: {
      title: "Sign In",
      email: "Email",
      password: "Password",
      sign_in: "Sign In",
      sign_up: "Sign Up",
      forgot_password: "Forgot Password?",
    },
    settings: {
      title: "Settings",
      labeling: {
        title: "Labeling Interface",
      },
      menu: {
        startTraining: "Start Model Training",
        testRequest: "Test Request",
        editMLBackend: "updateMLBackend",
        addMLBackend: "addMLBackend",
        model: "Model",
        connectModel: "Let’s connect your first model",
        connectModel_description:
          "Connect a machine learning model to generate predictions. These predictions can be compared side by side, used for efficient pre‒labeling and, to aid in active learning, directing users to the most impactful labeling tasks.",
        connectModel2: "Connect Model",
        needHelp: "Need help?",
        learnMoreAboutConnectingModels:
          "Learn more about connecting models in our docs",
        connectModel_description2:
          "A connected model has been detected! If you wish to fetch predictions from this model, please follow these steps:",
        selectTheDesiredTasks: "Select the desired tasks.",
        connectModel_description3:
          "If you want to use the model predictions for prelabeling, please configure this in the",
        annotationSettings: "Annotation settings",
        deleteMLBackend: "Delete ML Backend",
        deleteMLBackendConfirmation:
          "This action cannot be undone. Are you sure?",
        edit: "Edit",
        testRequest: "Send Test Request",
        startTraining: "Start Training",
        delete: "Delete",
        created: "Created",
        disconnected: "Disconnected",
        connected: "Connected",
        error: "Error",
        training: "Training",
        predicting: "Predicting",
        name: "Name",
        enterName: "Enter a name",
        backendURL: "Backend URL",
        selectAuthMethod: "Select authentication method",
        notAuth: "No Authentication",
        basicAuth: "Basic Authentication",
        basicAuthUser: "Basic auth user",
        basicAuthPass: "Basic auth pass",
        extraParams: "Any extra params to pass during model connection",
        interactivePreannotations: "Interactive preannotations",
        interactivePreannotationsDescription:
          "If enabled some labeling tools will send requests to the ML Backend interactively during the annotation process.",
        validateAndSave: "Validate and Save",
        navigateToDataManager: "Navigate to the Data Manager",
      },
      general: {
        title: "General Settings",
        menu: "General",
        project_name: "Project Name",
        description: "Description",
        workspace: "Workspace",
        select_option: "Select an option",
        workspace_tip:
          "Simplify project management by organizing projects into workspaces",
        learn_more: "Learn more",
        color: "Color",
        task_sampling: "Task Sampling",
        uncertainty_sampling: "Uncertainty sampling",
        uncertainty_sampling_desc:
          "Tasks are chosen according to model uncertainty score (active learning mode)",
        saved: "Saved",
        save: "Save",
      },
      danger: {
        confirm_title: "Action confirmation",
        confirm_body:
          "You're about to delete all things. This action cannot be undone.",
        confirm_ok: "Proceed",
        delete_annotations: "Delete {{count}} Annotations",
        delete_tasks: "Delete {{count}} Tasks",
        delete_predictions: "Delete {{count}} Predictions",
        reset_cache: "Reset Cache",
        reset_cache_help:
          "Reset Cache may help in cases like if you are unable to modify the labeling configuration due to validation errors concerning existing labels, but you are confident that the labels don't exist. You can use this action to reset the cache and try again.",
        drop_tabs: "Drop All Tabs",
        drop_tabs_help:
          "If the Data Manager is not loading, dropping all Data Manager tabs can help.",
        delete_project: "Delete Project",
        delete_project_help:
          "Deleting a project removes all tasks, annotations, and project data from the database.",
        title: "Danger Zone",
        desc: "Perform these actions at your own risk. Actions you take on this page can't be reverted. Make sure your data is backed up.",
      },
      annotation: {
        title: "Annotation Settings",
        header_labeling_instructions: "Labeling Instructions",
        instructions_p1:
          "Write instructions to help users complete labeling tasks.",
        instructions_p2:
          "The instruction field supports HTML markup and it allows use of images, iframes (pdf).",
        show_before_labeling: "Show before labeling",
        show_after_labeling: "Show after labeling",
        use_predictions_prelabel_description:
          "Enable and select which set of predictions to use for prelabeling.",
        saved: "Saved!",
        save: "Save",
      },
      storageSettings: {},
      predictions: {
        title: "Predictions",
        list: "Predictions List",
        description1:
          "List of predictions available in the project. Each card is associated with a separate model version. To learn about how to import predictions",
        see_documentation: "see&nbsp;the&nbsp;documentation",
        no_predictions: "No predictions yet uploaded",
        description2:
          "Predictions could be used to prelabel the data, or validate the model. You can upload and select predictions from multiple model versions. You can also connect live models in the Model tab.",
        need_help: "Need help",
        learn_more_about_predictions:
          "Learn more on how to upload predictions in our docs",
      },
      storage: {
        title: "Storage Settings",
        cloudStorage: "Cloud Storage",
        cloudStorageDescription:
          "Use cloud or database storage as the source for your labeling tasks or the target of your completed annotations.",
        sourceCloudStorage: "Source Cloud Storage",
        addSourceCloudStorage: "Add Source Storage",
        targetCloudStorage: "Target Cloud Storage",
        addTargetStorage: "Add Target Storage",
        deleteStorage: "Deleting storage",
        deleteStorageConfirmation:
          "This action cannot be undone. Are you sure?",
        storage_type: "Storage Type",
        updateStorage: "updateStorage",
        createStorage: "createStorage",
        success_connected: "Successfully connected!",
        fail_connected: "Connection failed",
        checkConnection: "Check Connection",
        addStorage: "Add Storage",
        untilted: "Untitled",
        sync_storage: "Sync Storage",
        syncing_message:
          "Syncing may take some time, please refresh the page to see the current status.",
        azure_blob_storage_with_service_principal:
          "Azure Blob Storage\nwith Service Principal",
        azure_blob_storage_with_service_principal_description:
          "Configure your Azure Blob Storage connection using Service Principal authentication for enhanced security (proxy only)",
        enterprise_feature: "Enterprise Feature",
        azure_blob_storage_with_service_principal_description_enterprise:
          "Azure Blob Storage with Service Principal is available in Label Studio Enterprise.",
        azure_blob_storage: "Azure Blob Storage",
        configuration_required:
          "Configure your Azure Blob Storage connection with all required Label Studio settings",
        container_name: "Container Name",
        my_azure_container: "my-azure-container",
        bucket_prefix: "Bucket prefix",
        path_to_files: "path/to/files",
        account_name: "Account Name",
        mystorage_account: "mystorageaccount",
        account_key: "Account Key",
        your_storage_account_key: "Your storage account key",
        use_pre_signed_urls:
          "Use pre-signed URLs (On) / Proxy through the platform (Off)",
        when_pre_signed_urls_are_enabled:
          "When pre-signed URLs are enabled, all data bypasses the platform and user browsers directly read data from storage",
        expire_pre_signed_urls: "Expire pre-signed URLs (minutes)",
        databricks_files: "Databricks Files\n(UC Volumes)",
        config_databricks_files:
          "Configure your Databricks Unity Catalog Volumes connection with all required settings (proxy only)",
        enterprise_feature: "Enterprise Feature",
        databricks_files_enterprise:
          "Databricks Files (UC Volumes) is available in Label Studio Enterprise.",
        no_provider_selected: "No provider selected",
        unknown_provider: "Unknown provider",
        enter_description:
          "Enter a descriptive name (e.g., 'Legal Documents', 'Training Data')",
        storageTitle: "Storage Title",
        this_name_will_help_you_identify_this_connection_in_your_project:
          "This name will help you identify this connection in your project",
        can_delete_objects: "Can delete objects from storage",
        if_unchecked_annotations_will_not_be_deleted_from_storage:
          "If unchecked, annotations will not be deleted from storage",
        configure_import_settings_and_preview_data:
          "Configure Import Settings & Preview Data",
        set_up_filters_for_your_files:
          "Set up filters for your files and preview what will be synchronized",
        import_configuration: "Import Configuration",
        files_preview: "Files Preview",
        path_to_files: "Path to Files",
        bucket_prefix: "Bucket Prefix",
        optional: "optional",
        specify_folder_path:
          "Specify the folder path within your storage where your files are located",
        specify_bucket_path:
          "Specify the folder path within your bucket where your files are located",
        path_to_files_or_leave_empty_for_root:
          "path/to/files/ or leave empty for root",
        choose_how_to_interpret_your_data:
          "Choose how to interpret your data from storage",
        files_automatically_creates_a_task_for_each_storage_object:
          "Files - Automatically creates a task for each storage object (e.g. JPG, MP3, TXT)",
        tasks_treat_each_json_jsonl_or_parquet_as_one_or_more_task_definitions_per_file:
          "Tasks - Treat each JSON, JSONL, or Parquet as one or more task definitions per file",
        select_import_method: "Select import method",
        use_regex_patterns_to_filter_which_files_are_imported:
          "Use regex patterns to filter which files are imported",
        common_filters: "Common filters",
        include_files_from_all_nested_folders:
          "Include files from all nested folders",
        no_preview_available: " No Preview Available",
        preview_files_will_be_displayed_here:
          'Configure your import settings and click "Load Preview" to see a sample of files that will be imported.',
        no_files_found: "No Files Found",
        no_files_matching_your_current_criteria_were_found:
          "No files matching your current criteria were found. Try adjusting your filter settings and reload the preview.",
        preview_limit_reached: "preview limit reached ...",
        choose_provider: "Choose your cloud storage provider",
        select_service:
          "Select the cloud storage service where your data is stored",
        unknownFieldType: "Unknown field type: ",
        testConnectionBeforeContinuing: "Test connection before continuing",
        thisProviderIsNotAvailableInTheCurrentVersion:
          "This provider is not available in the current version",
        amazon_s3: "Amazon S3",
        configuration_required:
          "Configure your AWS S3 connection with all required Label Studio settings",
        bucket_name: "Bucket Name",
        my_storage_bucket: "my-storage-bucket",
        region_name: "Region Name",
        us_east_1: "us-east-1 (default)",
        s3_endpoint: "S3 Endpoint",
        bucket_prefix: "Bucket prefix",
        path_to_files: "path/to/files",
        access_key_id: "Access Key ID",
        secret_access_key: "Secret Access Key",
        session_token: "Session Token",
        session_token_optional: "Session token (optional)",
        use_presigned_urls:
          "Use pre-signed URLs (On) / Proxy through the platform (Off)",
        when_pre_signed_urls_are_enabled:
          "When pre-signed URLs are enabled, all data bypasses the platform and user browsers directly read data from storage",
        expire_pre_signed_urls: "Expire pre-signed URLs (minutes)",
        google_cloud_storage: "Google Cloud Storage",
        configure_your_google_cloud_storage_connection:
          "Configure your Google Cloud Storage connection with all required Label Studio settings",
        google_application_credentials: "Google Application Credentials",
        paste_credentials_json:
          "Paste the contents of credentials.json in this field OR leave it blank to use ADC.",
        google_project_id: "Google Project ID",
        leave_blank_to_inherit:
          "Leave blank to inherit from Google Application Credentials.",
        google_cloud_storage: "Google Cloud Storage\n(WIF Auth)",
        configuration_description_wif:
          "Configure your Google Cloud Storage connection with Workload Identity Federation authentication (proxy only)",
        google_cloud_storage_wif_description:
          "Google Cloud Storage with Workload Identity Federation is available in Label Studio Enterprise.",
        local_files: "Local Files",
        local_files_description2:
          "Configure your local file storage connection with all required Label Studio settings",
        absolute_local_path: "Absolute local path",
        path: "Path",
        redis_storage: "Redis Storage",
        redis_description1:
          "Configure your Redis storage connection with all required Label Studio settings",
        database_number: "Database Number (db)",
        password: "Password",
        your_redis_password: "Your redis password",
        host: "Host",
        port: "Port",
        amazon_s3_with_iam_role: "Amazon S3\nwith IAM Role",
        configure_your_aws_s3_connection_using_iam_role_access_for_enhanced_security_proxy_only:
          "Configure your AWS S3 connection using IAM role access for enhanced security (proxy only)",
        amazon_s3_with_iam_role_available_in_label_studio_enterprise:
          "Amazon S3 with IAM Role is available in Label Studio Enterprise.",
      },
    },
    data_manager: {
      deleted_project: "Project was deleted or not yet created",
      back_to_projects: "Back to projects",
    },
    organization: {
      title: "Organization",
      api_token_settings: "API Token Settings",
      api_token_saved: "API Token settings saved",
      api_tokens_settings: "API Tokens Settings",
      add_people: "Add People",
      last_activity: "Last Activity",
      user_id: "User ID",
      error_loading_settings: "Error loading settings.",
      personal_access_tokens: "Personal Access Tokens",
      enable_increased_token_authentication_security:
        "Enable increased token authentication security",
      legacy_tokens: "Legacy Tokens",
      legacy_tokens_description:
        "Enable legacy access tokens, these do not expire",
      time_to_live: "Time-to-Live (optional, Personal Access Token only)",
      time_to_live_description:
        "The number of days, after creation, that the token will be valid for. After this time period a user will need to create a new access token",
      time_to_live_description2:
        "The number of days, after creation, that the token will be valid for. After this time period a user will need to create a new access token",
      save_changes: "Save Changes",
      created_projects: "Created Projects",
      contributed_to_projects: "Contributed to",
      last_activity: "Last activity on",
    },
  },
  libs: {
    datamanager: {
      emptyState: {
        import_data_to_get_started: "Import data to get your project started",
        connect_your_cloud:
          "Connect your cloud storage or upload files from your computer",
        connect_cloud_storage: "Connect Cloud Storage",
        import: "Import",
        see_docs_on_import: "See docs on importing data",
        open_in_new_tab: "opens in a new tab",
        no_tasks_found: "No tasks found",
        try_adjust_clean_filter:
          "Try adjusting or clearing the filters to see more results",
        clear_filters: "Clear Filters",
        no_tasks_ava_for_review: "No tasks available for review or labeling",
        tasks_imported_to_this_appear_here:
          "Tasks imported to this project will appear here",
        start_labeling_tasks: "Start labeling tasks",
        tasks_youve_labeled_appear_here:
          "Tasks you've labeled will appear here",
        label_all_tasks: "Label All Tasks",
        no_tasks_available: "No tasks available",
        tasks_assigned_to_you_appear_here:
          "Tasks assigned to you will appear here",
        tasks_will_appear_here:
          "Tasks will appear here when they become available",
        upgrade_plan_to_import: "You must upgrade your plan to import data",
        columns: "Columns",
        export: "Export",
        loading_actions: "Loading actions",
        fitImagesToWidth: "Fit images to width",
        tasks: "Tasks",
        annotations: "Annotations",
        storageSync: "Storage sync",
        submittedAnnotations: "Submitted annotations",
        predictions: "Predictions",
        label: "Label",
        all: "All",
        task: "Task",
        tasks: "Tasks",
        labelVisibleTasks: "Label Tasks As Displayed",
        filters: "Filters",
        orderBy: "Order by",
        actions: "Actions",
        errors_occurred: "Errors occurred",
        noFilters: "No filters applied",
        anotherFilter: "Another Filter",
        filter: "Filter",
      },
    },
  },
};

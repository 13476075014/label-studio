import {
  FF_BITMASK
} from "@humansignal/core/lib/utils/feature-flags";
import {
  defaultT
} from "../../../../core/src/index";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

export default {
  enableHotkeys: {
    newUI: {
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.labeling_hotkeys",
        "Labeling hotkeys"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.enables_quick_selection_of_labels_using_hotkeys",
        "Enables quick selection of labels using hotkeys"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.enable_labeling_hotkeys",
      "Enable labeling hotkeys"
    ),
    onChangeEvent: "toggleHotkeys",
    defaultValue: true,
  },
  enableTooltips: {
    newUI: {
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.show_hotkeys_on_tooltips",
        "Show hotkeys on tooltips"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.displays_keybindings_on_tools_and_actions_tooltips",
        "Displays keybindings on tools and actions tooltips"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.show_hotkey_tooltips",
      "Show hotkey tooltips"
    ),
    onChangeEvent: "toggleTooltips",
    checked: "",
    defaultValue: false,
  },
  enableLabelTooltips: {
    newUI: {
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.show_hotkeys_on_labels",
        "Show hotkeys on labels"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.displays_keybindings_on_labels",
        "Displays keybindings on labels"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.show_labels_hotkey_tooltips",
      "Show labels hotkey tooltips"
    ),
    onChangeEvent: "toggleLabelTooltips",
    defaultValue: true,
  },
  showLabels: {
    newUI: {
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.show_region_labels",
        "Show region labels"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.display_region_label_names",
        "Display region label names"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.show_labels_inside_the_regions",
      "Show labels inside the regions"
    ),
    onChangeEvent: "toggleShowLabels",
    defaultValue: false,
  },
  continuousLabeling: {
    newUI: {
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.keep_label_selected_after_creating_a_region",
        "Keep label selected after creating a region"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.allows_continuous_region_creation_using_the_selected_label",
        "Allows continuous region creation using the selected label"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.keep_label_selected_after_creating_a_region",
      "Keep label selected after creating a region"
    ),
    onChangeEvent: "toggleContinuousLabeling",
    defaultValue: false,
  },
  selectAfterCreate: {
    newUI: {
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.select_region_after_creating_it",
        "Select region after creating it"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.automatically_selects_newly_created_regions",
        "Automatically selects newly created regions"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.select_regions_after_creating",
      "Select regions after creating"
    ),
    onChangeEvent: "toggleSelectAfterCreate",
    defaultValue: false,
  },
  showLineNumbers: {
    newUI: {
      tags: "Text Tag",
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.show_line_numbers",
        "Show line numbers"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.identify_and_reference_specific_lines_of_text_in_your_document",
        "Identify and reference specific lines of text in your document"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.show_line_numbers_for_text",
      "Show line numbers for Text"
    ),
    onChangeEvent: "toggleShowLineNumbers",
    defaultValue: false,
  },
  preserveSelectedTool: {
    newUI: {
      tags: "Image Tag",
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.keep_selected_tool",
        "Keep selected tool"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.persists_the_selected_tool_across_tasks",
        "Persists the selected tool across tasks"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.remember_selected_tool",
      "Remember Selected Tool"
    ),
    onChangeEvent: "togglepreserveSelectedTool",
    defaultValue: true,
  },
  enableSmoothing: {
    newUI: {
      tags: "Image Tag",
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.pixel_smoothing_on_zoom",
        "Pixel smoothing on zoom"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.smooth_image_pixels_when_zoomed_in",
        "Smooth image pixels when zoomed in"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.enable_image_smoothing_when_zoom",
      "Enable image smoothing when zoom"
    ),
    onChangeEvent: "toggleSmoothing",
    defaultValue: true,
  },
  invertedZoom: {
    newUI: {
      tags: "Image Tag",
      title: defaultT(
        t,
        "libs.datamanager.labelingSettings.invert_zoom_direction",
        "Invert zoom direction"
      ),
      description: defaultT(
        t,
        "libs.datamanager.labelingSettings.invert_the_direction_of_scroll_to_zoom",
        "Invert the direction of scroll-to-zoom"
      ),
    },
    description: defaultT(
      t,
      "libs.datamanager.labelingSettings.enable_inverted_zoom_direction",
      "Enable inverted zoom direction"
    ),
    onChangeEvent: "toggleInvertedZoom",
    defaultValue: false,
    flag: FF_BITMASK,
  },
};

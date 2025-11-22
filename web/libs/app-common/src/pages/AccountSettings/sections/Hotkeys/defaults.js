import {
  defaultT
} from "../../../../../../core/src/index";
import i18n from "i18next";

export const DEFAULT_HOTKEYS = () => {
  const t = i18n.t.bind(i18n);
  return [
    // Annotation Controls
    {
      id: 100,
      section: "annotation",
      element: "annotation:submit",
      label: defaultT(
        t,
        "pages.account_settings.annotation.submit_annotation",
        "Submit Annotation"
      ),
      key: "ctrl+enter",
      description: defaultT(
        t,
        "pages.account_settings.annotation.submit_the_current_annotation",
        "Submit the current annotation"
      ),
      active: true,
    },
    {
      id: 200,
      section: "annotation",
      element: "annotation:skip",
      label: defaultT(
        t,
        "pages.account_settings.annotation.skip_task",
        "Skip Task"
      ),
      key: "ctrl+space",
      description: defaultT(
        t,
        "pages.account_settings.annotation.skip_the_current_task",
        "Skip the current task"
      ),
      active: true,
    },
    {
      id: 300,
      section: "annotation",
      element: "annotation:undo",
      label: defaultT(t, "pages.account_settings.annotation.undo", "Undo"),
      key: "ctrl+z",
      description: defaultT(
        t,
        "pages.account_settings.annotation.undo_last_action",
        "Undo last action"
      ),
      active: true,
    },
    {
      id: 400,
      section: "annotation",
      element: "annotation:redo",
      label: defaultT(t, "pages.account_settings.annotation.redo", "Redo"),
      key: "ctrl+shift+z",
      description: defaultT(
        t,
        "pages.account_settings.annotation.redo_previously_undone_action",
        "Redo previously undone action"
      ),
      active: true,
    },

    // Data Manager
    {
      id: 500,
      section: "data_manager",
      element: "dm.focus-previous",
      label: defaultT(
        t,
        "pages.account_settings.data_manager.focus_previous_task",
        "Focus Previous Task"
      ),
      key: "shift+up",
      description: defaultT(
        t,
        "pages.account_settings.data_manager.move_focus_to_the_previous_task",
        "Move focus to the previous task"
      ),
      active: true,
    },
    {
      id: 600,
      section: "data_manager",
      element: "dm.focus-next",
      label: defaultT(
        t,
        "pages.account_settings.data_manager.focus_next_task",
        "Focus Next Task"
      ),
      key: "shift+down",
      description: defaultT(
        t,
        "pages.account_settings.data_manager.move_focus_to_the_next_task",
        "Move focus to the next task"
      ),
      active: true,
    },
    {
      id: 700,
      section: "data_manager",
      element: "dm.close-labeling",
      label: defaultT(
        t,
        "pages.account_settings.data_manager.focus_closed_task",
        "Focus Closed Task"
      ),
      key: "shift+left",
      description: defaultT(
        t,
        "pages.account_settings.data_manager.focus_on_the_closed_task_column",
        "Focus on the closed task column"
      ),
      active: true,
    },
    {
      id: 800,
      section: "data_manager",
      element: "dm.open-labeling",
      label: defaultT(
        t,
        "pages.account_settings.data_manager.focus_open_task",
        "Focus Open Task"
      ),
      key: "shift+right",
      description: defaultT(
        t,
        "pages.account_settings.data_manager.focus_on_the_open_task_column",
        "Focus on the open task column"
      ),
      active: true,
    },
    {
      id: 900,
      section: "data_manager",
      element: "dm.toggle-bulk-sidebar-minimization",
      label: defaultT(
        t,
        "pages.account_settings.data_manager.toggle_bulk_sidebar",
        "Toggle Bulk Sidebar"
      ),
      key: "shift+.",
      description: defaultT(
        t,
        "pages.account_settings.data_manager.minimize_or_expand_bulk_actions_sidebar",
        "Minimize or expand bulk actions sidebar"
      ),
      active: true,
    },

    // Region Management
    {
      id: 1100,
      section: "regions",
      element: "region:delete-all",
      label: defaultT(
        t,
        "pages.account_settings.regions.delete_all_regions",
        "Delete All Regions"
      ),
      key: "ctrl+backspace",
      description: defaultT(
        t,
        "pages.account_settings.regions.remove_all_regions",
        "Remove all regions"
      ),
      active: true,
    },
    {
      id: 1200,
      section: "regions",
      element: "region:focus",
      label: defaultT(
        t,
        "pages.account_settings.regions.focus_first_region",
        "Focus First Region"
      ),
      key: "enter",
      description: defaultT(
        t,
        "pages.account_settings.regions.move_focus_to_the_first_focusable_region",
        "Move focus to the first focusable region"
      ),
      active: true,
    },
    {
      id: 1300,
      section: "regions",
      element: "region:relation",
      label: defaultT(
        t,
        "pages.account_settings.regions.create_region_relation",
        "Create Region Relation"
      ),
      key: "alt+r",
      description: defaultT(
        t,
        "pages.account_settings.regions.create_a_relation_between_selected_regions",
        "Create a relation between selected regions"
      ),
      active: true,
    },
    {
      id: 1400,
      section: "regions",
      element: "region:visibility",
      label: defaultT(
        t,
        "pages.account_settings.regions.toggle_region_visibility",
        "Toggle Region Visibility"
      ),
      key: "alt+h",
      description: defaultT(
        t,
        "pages.account_settings.regions.show_or_hide_the_selected_region",
        "Show or hide the selected region"
      ),
      active: true,
    },
    {
      id: 1500,
      section: "regions",
      element: "region:visibility-all",
      label: defaultT(
        t,
        "pages.account_settings.regions.toggle_all_region_visibility",
        "Toggle All Region Visibility"
      ),
      key: "ctrl+h",
      description: defaultT(
        t,
        "pages.account_settings.regions.show_or_hide_all_regions",
        "Show or hide all regions"
      ),
      active: true,
    },
    {
      id: 1600,
      section: "regions",
      element: "region:lock",
      label: defaultT(
        t,
        "pages.account_settings.regions.lock_region",
        "Lock Region"
      ),
      key: "alt+l",
      description: defaultT(
        t,
        "pages.account_settings.regions.lock_or_unlock_the_selected_region",
        "Lock or unlock the selected region"
      ),
      active: true,
    },
    {
      id: 1700,
      section: "regions",
      element: "region:meta",
      label: defaultT(
        t,
        "pages.account_settings.regions.edit_region_metadata",
        "Edit Region Metadata"
      ),
      key: "alt+m",
      description: defaultT(
        t,
        "pages.account_settings.regions.edit_metadata_for_selected_region",
        "Edit metadata for selected region"
      ),
      active: true,
    },
    {
      id: 1800,
      section: "regions",
      element: "region:unselect",
      label: defaultT(
        t,
        "pages.account_settings.regions.unselect_region",
        "Unselect Region"
      ),
      key: "u",
      description: defaultT(
        t,
        "pages.account_settings.regions.deselect_the_currently_selected_region",
        "Deselect the currently selected region"
      ),
      active: true,
    },
    {
      id: 1900,
      section: "regions",
      element: "region:exit",
      label: defaultT(
        t,
        "pages.account_settings.regions.exit_region_mode",
        "Exit Region Mode"
      ),
      key: "escape",
      description: defaultT(
        t,
        "pages.account_settings.regions.exit_relation_mode_and_unselect_region",
        "Exit relation mode and unselect region"
      ),
      active: true,
    },
    {
      id: 2000,
      section: "regions",
      element: "region:delete",
      label: defaultT(
        t,
        "pages.account_settings.regions.delete_selected_region",
        "Delete Selected Region"
      ),
      key: "backspace",
      description: defaultT(
        t,
        "pages.account_settings.regions.delete_currently_selected_region",
        "Delete currently selected region"
      ),
      active: true,
    },
    {
      id: 2100,
      section: "regions",
      element: "region:cycle",
      label: defaultT(
        t,
        "pages.account_settings.regions.cycle_regions",
        "Cycle Regions"
      ),
      key: "alt+.",
      description: defaultT(
        t,
        "pages.account_settings.regions.cycle_through_all_regions",
        "Cycle through all regions"
      ),
      active: true,
    },
    {
      id: 2200,
      section: "regions",
      element: "region:duplicate",
      label: defaultT(
        t,
        "pages.account_settings.regions.duplicate_region",
        "Duplicate Region"
      ),
      key: "ctrl+d",
      description: defaultT(
        t,
        "pages.account_settings.regions.create_a_copy_of_the_selected_region",
        "Create a copy of the selected region"
      ),
      active: true,
    },
    {
      id: 2300,
      section: "regions",
      element: "segment:delete",
      label: defaultT(
        t,
        "pages.account_settings.regions.delete_segment",
        "Delete Segment"
      ),
      key: "delete",
      description: defaultT(
        t,
        "pages.account_settings.regions.delete_selected_segment",
        "Delete selected segment"
      ),
      active: true,
    },

    // Editor - Audio Controls
    {
      id: 2400,
      section: "audio",
      element: "audio:back",
      label: defaultT(
        t,
        "pages.account_settings.audio.rewind_1_second",
        "Rewind 1 Second"
      ),
      key: "ctrl+b",
      description: defaultT(
        t,
        "pages.account_settings.audio.rewind_the_audio_by_1_second",
        "Rewind the audio by 1 second"
      ),
      active: true,
    },
    {
      id: 2500,
      section: "audio",
      element: "audio:playpause",
      label: defaultT(
        t,
        "pages.account_settings.audio.play_pause_audio",
        "Play / Pause Audio"
      ),
      key: "ctrl+p",
      description: defaultT(
        t,
        "pages.account_settings.audio.toggle_audio_playback",
        "Toggle audio playback"
      ),
      active: true,
    },
    {
      id: 2600,
      section: "audio",
      element: "audio:step-backward",
      label: defaultT(t, "pages.account_settings.audio.step_back", "Step Back"),
      key: "alt+a",
      description: defaultT(
        t,
        "pages.account_settings.audio.step_back_one_frame",
        "Step back one frame"
      ),
      active: true,
    },
    {
      id: 2700,
      section: "audio",
      element: "audio:step-forward",
      label: defaultT(
        t,
        "pages.account_settings.audio.step_forward",
        "Step Forward"
      ),
      key: "alt+d",
      description: defaultT(
        t,
        "pages.account_settings.audio.step_forward_one_frame",
        "Step forward one frame"
      ),
      active: true,
    },

    // Editor - Video Controls
    {
      id: 2800,
      section: "video",
      element: "media:playpause",
      label: defaultT(
        t,
        "pages.account_settings.video.play_pause_video",
        "Play / Pause Video"
      ),
      key: "ctrl+alt+space",
      description: defaultT(
        t,
        "pages.account_settings.video.toggle_video_playback",
        "Toggle video playback"
      ),
      active: true,
    },
    {
      id: 2900,
      section: "video",
      element: "media:step-backward",
      label: defaultT(t, "pages.account_settings.video.step_back", "Step Back"),
      key: "alt+left",
      description: defaultT(
        t,
        "pages.account_settings.video.step_one_frame_backward",
        "Step one frame backward"
      ),
      active: true,
    },
    {
      id: 3000,
      section: "video",
      element: "media:step-forward",
      label: defaultT(
        t,
        "pages.account_settings.video.step_forward",
        "Step Forward"
      ),
      key: "alt+right",
      description: defaultT(
        t,
        "pages.account_settings.video.step_one_frame_forward",
        "Step one frame forward"
      ),
      active: true,
    },
    {
      id: 3100,
      section: "video",
      element: "video:keyframe-backward",
      label: defaultT(
        t,
        "pages.account_settings.video.previous_keyframe",
        "Previous Keyframe"
      ),
      key: "ctrl+alt+left",
      description: defaultT(
        t,
        "pages.account_settings.video.jump_to_previous_keyframe",
        "Jump to previous keyframe"
      ),
      active: true,
    },
    {
      id: 3200,
      section: "video",
      element: "video:keyframe-forward",
      label: defaultT(
        t,
        "pages.account_settings.video.next_keyframe",
        "Next Keyframe"
      ),
      key: "ctrl+alt+right",
      description: defaultT(
        t,
        "pages.account_settings.video.jump_to_next_keyframe",
        "Jump to next keyframe"
      ),
      active: true,
    },
    {
      id: 3300,
      section: "video",
      element: "video:backward",
      label: defaultT(
        t,
        "pages.account_settings.video.seek_backward",
        "Seek Backward"
      ),
      key: "alt+left",
      description: defaultT(
        t,
        "pages.account_settings.video.seek_video_backward",
        "Seek video backward"
      ),
      active: true,
    },
    {
      id: 3400,
      section: "video",
      element: "video:rewind",
      label: defaultT(
        t,
        "pages.account_settings.video.first_frame",
        "First Frame"
      ),
      key: "shift+ctrl+alt+left",
      description: defaultT(
        t,
        "pages.account_settings.video.jump_to_first_frame",
        "Jump to first frame"
      ),
      active: true,
    },
    {
      id: 3500,
      section: "video",
      element: "video:forward",
      label: defaultT(
        t,
        "pages.account_settings.video.seek_forward",
        "Seek Forward"
      ),
      key: "shift+alt+right",
      description: defaultT(
        t,
        "pages.account_settings.video.seek_video_forward",
        "Seek video forward"
      ),
      active: true,
    },
    {
      id: 3600,
      section: "video",
      element: "video:fastforward",
      label: defaultT(
        t,
        "pages.account_settings.video.last_frame",
        "Last Frame"
      ),
      key: "shift+ctrl+alt+right",
      description: defaultT(
        t,
        "pages.account_settings.video.jump_to_last_frame",
        "Jump to last frame"
      ),
      active: true,
    },
    {
      id: 3700,
      section: "video",
      element: "video:hop-backward",
      label: defaultT(
        t,
        "pages.account_settings.video.hop_backward",
        "Hop Backward"
      ),
      key: "shift+alt+left",
      description: defaultT(
        t,
        "pages.account_settings.video.hop_backward_quickly",
        "Hop backward quickly"
      ),
      active: true,
    },
    {
      id: 3800,
      section: "video",
      element: "video:hop-forward",
      label: defaultT(
        t,
        "pages.account_settings.video.hop_forward",
        "Hop Forward"
      ),
      key: "shift+alt+right",
      description: defaultT(
        t,
        "pages.account_settings.video.hop_forward_quickly",
        "Hop forward quickly"
      ),
      active: true,
    },

    // Editor - Time Series Controls
    {
      id: 3900,
      section: "timeseries",
      element: "ts:grow-left",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.extend_left",
        "Extend Left"
      ),
      key: "left",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.extend_the_region_to_the_left",
        "Extend the region to the left"
      ),
      active: true,
    },
    {
      id: 4000,
      section: "timeseries",
      element: "ts:grow-right",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.extend_right",
        "Extend Right"
      ),
      key: "right",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.extend_the_region_to_the_right",
        "Extend the region to the right"
      ),
      active: true,
    },
    {
      id: 4100,
      section: "timeseries",
      element: "ts:shrink-left",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_left",
        "Shrink Left"
      ),
      key: "alt+left",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_the_region_from_the_left",
        "Shrink the region from the left"
      ),
      active: true,
    },
    {
      id: 4200,
      section: "timeseries",
      element: "ts:shrink-right",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_right",
        "Shrink Right"
      ),
      key: "alt+right",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_the_region_from_the_right",
        "Shrink the region from the right"
      ),
      active: true,
    },
    {
      id: 4300,
      section: "timeseries",
      element: "ts:grow-left-large",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.extend_left_large",
        "Extend Left (Large)"
      ),
      key: "shift+left",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.extend_region_left_significantly",
        "Extend region left significantly"
      ),
      active: true,
    },
    {
      id: 4400,
      section: "timeseries",
      element: "ts:grow-right-large",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.extend_right_large",
        "Extend Right (Large)"
      ),
      key: "shift+right",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.extend_region_right_significantly",
        "Extend region right significantly"
      ),
      active: true,
    },
    {
      id: 4500,
      section: "timeseries",
      element: "ts:shrink-left-large",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_left_large",
        "Shrink Left (Large)"
      ),
      key: "shift+alt+left",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_region_from_left_significantly",
        "Shrink region from left significantly"
      ),
      active: true,
    },
    {
      id: 4600,
      section: "timeseries",
      element: "ts:shrink-right-large",
      label: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_right_large",
        "Shrink Right (Large)"
      ),
      key: "shift+alt+right",
      description: defaultT(
        t,
        "pages.account_settings.timeseries.shrink_region_from_right_significantly",
        "Shrink region from right significantly"
      ),
      active: true,
    },

    // Image Gallery Controls
    {
      id: 4700,
      section: "image_gallery",
      element: "image:prev",
      label: defaultT(
        t,
        "pages.account_settings.image_gallery.previous_image",
        "Previous Image"
      ),
      key: "ctrl+left",
      description: defaultT(
        t,
        "pages.account_settings.image_gallery.view_previous_image",
        "View previous image"
      ),
      active: true,
    },
    {
      id: 4800,
      section: "image_gallery",
      element: "image:next",
      label: defaultT(
        t,
        "pages.account_settings.image_gallery.next_image",
        "Next Image"
      ),
      key: "ctrl+right",
      description: defaultT(
        t,
        "pages.account_settings.image_gallery.view_next_image",
        "View next image"
      ),
      active: true,
    },

    {
      id: 5000,
      section: "tools",
      element: "tool:zoom-in",
      label: defaultT(t, "pages.account_settings.tools.zoom_in", "Zoom In"),
      key: "ctrl+plus",
      description: defaultT(
        t,
        "pages.account_settings.tools.zoom_in_on_the_image",
        "Zoom in on the image"
      ),
      active: true,
    },
    {
      id: 5100,
      section: "tools",
      element: "tool:pan-image",
      label: defaultT(t, "pages.account_settings.tools.pan_image", "Pan Image"),
      key: "H",
      description: defaultT(
        t,
        "pages.account_settings.tools.pan_around_the_image",
        "Pan around the image"
      ),
      active: true,
    },
    {
      id: 5200,
      section: "tools",
      element: "tool:zoom-to-fit",
      label: defaultT(
        t,
        "pages.account_settings.tools.zoom_to_fit",
        "Zoom to Fit"
      ),
      key: "shift+1",
      description: defaultT(
        t,
        "pages.account_settings.tools.zoom_to_fit_the_full_image_in_view",
        "Zoom to fit the full image in view"
      ),
      active: true,
    },
    {
      id: 5300,
      section: "tools",
      element: "tool:zoom-to-actual",
      label: defaultT(
        t,
        "pages.account_settings.tools.zoom_to_100",
        "Zoom to 100%"
      ),
      key: "shift+2",
      description: defaultT(
        t,
        "pages.account_settings.tools.zoom_to_actual_image_size_100",
        "Zoom to actual image size (100%)"
      ),
      active: true,
    },
    {
      id: 5400,
      section: "tools",
      element: "tool:zoom-out",
      label: defaultT(t, "pages.account_settings.tools.zoom_out", "Zoom Out"),
      key: "ctrl+minus",
      description: defaultT(
        t,
        "pages.account_settings.tools.zoom_out_of_the_image",
        "Zoom out of the image"
      ),
      active: true,
    },
    {
      id: 5401,
      section: "tools",
      element: "tool:move",
      label: defaultT(t, "pages.account_settings.tools.move_tool", "Move Tool"),
      key: "V",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_move_tool_to_reposition_annotations",
        "Select the move tool to reposition annotations"
      ),
      active: true,
    },
    {
      id: 5402,
      section: "tools",
      element: "tool:brush",
      label: defaultT(
        t,
        "pages.account_settings.tools.brush_tool",
        "Brush Tool"
      ),
      key: "B",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_brush_tool",
        "Select the brush tool"
      ),
      active: true,
    },

    {
      id: 5500,
      section: "tools",
      element: "tool:ellipse",
      label: defaultT(
        t,
        "pages.account_settings.tools.ellipse_tool",
        "Ellipse Tool"
      ),
      key: "O",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_ellipse_tool",
        "Select the ellipse tool"
      ),
      active: true,
    },
    {
      id: 5600,
      section: "tools",
      element: "tool:eraser",
      label: defaultT(
        t,
        "pages.account_settings.tools.eraser_tool",
        "Eraser Tool"
      ),
      key: "E",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_eraser_tool",
        "Select the eraser tool"
      ),
      active: true,
    },
    {
      id: 5700,
      section: "tools",
      element: "tool:auto-detect",
      label: defaultT(
        t,
        "pages.account_settings.tools.auto_detect",
        "Auto Detect"
      ),
      key: "M",
      description: defaultT(
        t,
        "pages.account_settings.tools.use_the_auto_detect_tool_to_automatically_suggest_regions",
        "Use the auto-detect tool to automatically suggest regions"
      ),
      active: true,
    },
    {
      id: 5900,
      section: "tools",
      element: "tool:key-point",
      label: defaultT(
        t,
        "pages.account_settings.tools.key_point_tool",
        "Key Point Tool"
      ),
      key: "K",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_key_point_annotation_tool",
        "Select the key point annotation tool"
      ),
      active: true,
    },
    {
      id: 6000,
      section: "tools",
      element: "tool:magic-wand",
      label: defaultT(
        t,
        "pages.account_settings.tools.magic_wand",
        "Magic Wand"
      ),
      key: "W",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_magic_wand_tool_for_smart_region_selection",
        "Select the magic wand tool for smart region selection"
      ),
      active: true,
    },
    {
      id: 6100,
      section: "tools",
      element: "tool:polygon",
      label: defaultT(
        t,
        "pages.account_settings.tools.polygon_tool",
        "Polygon Tool"
      ),
      key: "P",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_polygon_annotation_tool",
        "Select the polygon annotation tool"
      ),
      active: true,
    },
    {
      id: 6200,
      section: "tools",
      element: "tool:rect",
      label: defaultT(
        t,
        "pages.account_settings.tools.rectangle_tool",
        "Rectangle Tool"
      ),
      key: "R",
      description: defaultT(
        t,
        "pages.account_settings.tools.select_the_rectangle_annotation_tool",
        "Select the rectangle annotation tool"
      ),
      active: true,
    },
    {
      id: 6201,
      section: "tools",
      element: "tool:rect-3point",
      label: defaultT(
        t,
        "pages.account_settings.tools.3_point_rectangle",
        "3-Point Rectangle"
      ),
      key: "shift+R",
      description: defaultT(
        t,
        "pages.account_settings.tools.draw_a_rotated_rectangle_using_3_point_selection",
        "Draw a rotated rectangle using 3-point selection"
      ),
      active: true,
    },

    {
      id: 6300,
      section: "tools",
      element: "tool:rotate-left",
      label: defaultT(
        t,
        "pages.account_settings.tools.rotate_left",
        "Rotate Left"
      ),
      key: "alt+left",
      description: defaultT(
        t,
        "pages.account_settings.tools.rotate_the_image_90_to_the_left",
        "Rotate the image 90° to the left"
      ),
      active: true,
    },
    {
      id: 6400,
      section: "tools",
      element: "tool:rotate-right",
      label: defaultT(
        t,
        "pages.account_settings.tools.rotate_right",
        "Rotate Right"
      ),
      key: "alt+right",
      description: defaultT(
        t,
        "pages.account_settings.tools.rotate_the_image_90_to_the_right",
        "Rotate the image 90° to the right"
      ),
      active: true,
    },
    {
      id: 6700,
      section: "tools",
      element: "tool:decrease-tool",
      label: defaultT(
        t,
        "pages.account_settings.tools.decrease_tool_size",
        "Decrease Tool Size"
      ),
      key: "[",
      description: defaultT(
        t,
        "pages.account_settings.tools.decrease_tool_size",
        "Decrease tool size"
      ),
      active: true,
    },
    {
      id: 6800,
      section: "tools",
      element: "tool:increase-tool",
      label: defaultT(
        t,
        "pages.account_settings.tools.increase_tool_size",
        "Increase Tool Size"
      ),
      key: "]",
      description: defaultT(
        t,
        "pages.account_settings.tools.increase_tool_size",
        "Increase tool size"
      ),
      active: true,
    },

    // Paragraph Navigation
    {
      id: 6900,
      section: "paragraphs",
      element: "phrases:next-phrase",
      label: defaultT(
        t,
        "pages.account_settings.paragraphs.next_phrase",
        "Next Phrase"
      ),
      key: "ctrl+down",
      description: defaultT(
        t,
        "pages.account_settings.paragraphs.navigate_to_the_next_phrase_in_paragraph_view",
        "Navigate to the next phrase in paragraph view"
      ),
      active: true,
    },
    {
      id: 7000,
      section: "paragraphs",
      element: "phrases:previous-phrase",
      label: defaultT(
        t,
        "pages.account_settings.paragraphs.previous_phrase",
        "Previous Phrase"
      ),
      key: "ctrl+up",
      description: defaultT(
        t,
        "pages.account_settings.paragraphs.navigate_to_the_previous_phrase_in_paragraph_view",
        "Navigate to the previous phrase in paragraph view"
      ),
      active: true,
    },
    {
      id: 7100,
      section: "paragraphs",
      element: "phrases:select_all_annotate",
      label: defaultT(
        t,
        "pages.account_settings.paragraphs.select_all_and_annotate",
        "Select All and Annotate"
      ),
      key: "ctrl+shift+a",
      description: defaultT(
        t,
        "pages.account_settings.paragraphs.select_all_text_in_current_phrase_and_create_annotation",
        "Select all text in current phrase and create annotation"
      ),
      active: true,
    },
    {
      id: 7200,
      section: "paragraphs",
      element: "phrases:next-region",
      label: defaultT(
        t,
        "pages.account_settings.paragraphs.next_region_in_phrase",
        "Next Region in Phrase"
      ),
      key: "ctrl+right",
      description: defaultT(
        t,
        "pages.account_settings.paragraphs.navigate_to_the_next_region_within_current_phrase",
        "Navigate to the next region within current phrase"
      ),
      active: true,
    },
    {
      id: 7300,
      section: "paragraphs",
      element: "phrases:previous-region",
      label: defaultT(
        t,
        "pages.account_settings.paragraphs.previous_region_in_phrase",
        "Previous Region in Phrase"
      ),
      key: "ctrl+left",
      description: defaultT(
        t,
        "pages.account_settings.paragraphs.navigate_to_the_previous_region_within_current_phrase",
        "Navigate to the previous region within current phrase"
      ),
      active: true,
    },
  ];
};

export const HOTKEY_SECTIONS = () => {
  const t = i18n.t.bind(i18n);
  return [{
      id: "annotation",
      title: defaultT(
        t,
        "pages.account_settings.annotation_actions",
        "Annotation Actions"
      ),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_common_annotation_tasks_like_submit_skip_undo_and_redo",
        "Shortcuts for common annotation tasks like submit, skip, undo and redo"
      ),
    },

    {
      id: "data_manager",
      title: defaultT(t, "pages.account_settings.data_manager_title", "Data Manager"),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_navigating_and_managing_tasks_in_project_s_data_manager",
        "Shortcuts for navigating and managing tasks in Project's Data Manager"
      ),
    },

    {
      id: "regions",
      title: defaultT(
        t,
        "pages.account_settings.region_management",
        "Region Management"
      ),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_creating_selecting_and_manipulating_annotation_regions",
        "Shortcuts for creating, selecting and manipulating annotation regions"
      ),
    },

    {
      id: "tools",
      title: defaultT(t, "pages.account_settings.tools_title", "Tools"),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_controlling_tools_panel_when_labeling_images",
        "Shortcuts for controlling tools panel when labeling images"
      ),
    },

    {
      id: "audio",
      title: defaultT(
        t,
        "pages.account_settings.audio_controls",
        "Audio Controls"
      ),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_controlling_audio_playback_and_navigation",
        "Shortcuts for controlling audio playback and navigation"
      ),
    },
    {
      id: "video",
      title: defaultT(
        t,
        "pages.account_settings.video_controls",
        "Video Controls"
      ),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_controlling_video_playback_and_navigation",
        "Shortcuts for controlling video playback and navigation"
      ),
    },
    {
      id: "timeseries",
      title: defaultT(
        t,
        "pages.account_settings.time_series_controls",
        "Time Series Controls"
      ),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_manipulating_time_series_data_regions",
        "Shortcuts for manipulating time series data regions"
      ),
    },
    {
      id: "image_gallery",
      title: defaultT(
        t,
        "pages.account_settings.image_gallery_navigation",
        "Image Gallery Navigation"
      ),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_navigating_between_images_in_multi_image_tasks",
        "Shortcuts for navigating between images in multi-image tasks"
      ),
    },
    {
      id: "paragraphs",
      title: defaultT(
        t,
        "pages.account_settings.paragraph_navigation",
        "Paragraph Navigation"
      ),
      description: defaultT(
        t,
        "pages.account_settings.shortcuts_for_navigating_phrases_and_regions_in_paragraph_dialogue_view",
        "Shortcuts for navigating phrases and regions in paragraph/dialogue view"
      ),
    },
  ];
}


/**
 * URL patterns mapped to their corresponding hotkey sections
 * Used to automatically determine which shortcuts to display based on current page
 */
export const URL_TO_SECTION_MAPPING = [{
    regex: /\/projects\/\d+\/data\/?\?.*task=\d+/i,
    section: ["annotation", "regions"],
  },
  {
    regex: /\/projects\/\d+\/data\/?$/i,
    section: "data_manager",
  },
];

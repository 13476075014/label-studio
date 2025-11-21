import {
    defaultT
} from "../../../../core/src/index";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

export default () => {
    return {
        "audio:back": {
            "key": "ctrl+b",
            "mac": "command+b",
            "description": defaultT(t, "libs.hotkeys.back_for_one_second", "Back for one second")
        },
        "audio:playpause": {
            "key": "ctrl+p",
            "mac": "command+p",
            "description": defaultT(t, "libs.hotkeys.play_pause", "Play/pause")
        },
        "audio:step-backward": {
            "key": "alt+a",
            "description": defaultT(t, "libs.hotkeys.go_one_step_back", "Go one step back")
        },
        "audio:step-forward": {
            "key": "alt+d",
            "description": defaultT(t, "libs.hotkeys.go_one_step_forward", "Go one step forward")
        },
        "ts:grow-left": {
            "key": "left",
            "description": defaultT(t, "libs.hotkeys.increase_region_to_the_left", "Increase region to the left")
        },
        "ts:grow-right": {
            "key": "right",
            "description": defaultT(t, "libs.hotkeys.increase_region_to_the_right", "Increase region to the right")
        },
        "ts:shrink-left": {
            "key": "alt+left",
            "description": defaultT(t, "libs.hotkeys.decrease_region_on_the_left", "Decrease region on the left")
        },
        "ts:shrink-right": {
            "key": "alt+right",
            "description": defaultT(t, "libs.hotkeys.decrease_region_on_the_right", "Decrease region on the right")
        },
        "ts:grow-left-large": {
            "key": "shift+left"
        },
        "ts:grow-right-large": {
            "key": "shift+right"
        },
        "ts:shrink-left-large": {
            "key": "shift+alt+left"
        },
        "ts:shrink-right-large": {
            "key": "shift+alt+right"
        },
        "annotation:submit": {
            "key": "ctrl+enter",
            "mac": "command+enter",
            "description": defaultT(t, "libs.hotkeys.submit_annotation", "Submit annotation")
        },
        "annotation:skip": {
            "key": "ctrl+space",
            "mac": "alt+enter",
            "description": defaultT(t, "libs.hotkeys.skip_task", "Skip task")
        },
        "annotation:undo": {
            "key": "ctrl+z",
            "mac": "command+z",
            "description": defaultT(t, "libs.hotkeys.undo", "Undo")
        },
        "annotation:redo": {
            "key": "ctrl+shift+z",
            "mac": "command+shift+z",
            "description": defaultT(t, "libs.hotkeys.redo", "Redo")
        },
        "polygon:undo": {
            "key": "ctrl+z",
            "mac": "command+z",
            "description": defaultT(t, "libs.hotkeys.undo", "Undo")
        },
        "polygon:redo": {
            "key": "ctrl+shift+z",
            "mac": "command+shift+z",
            "description": defaultT(t, "libs.hotkeys.redo", "Redo")
        },
        "region:delete-all": {
            "key": "ctrl+backspace",
            "mac": "command+backspace",
            "description": defaultT(t, "libs.hotkeys.delete_all_regions", "Delete all regions")
        },
        "region:focus": {
            "key": "enter",
            "description": defaultT(t, "libs.hotkeys.focus_first_focusable_region", "Focus first focusable region")
        },
        "region:relation": {
            "key": "alt+r",
            "description": defaultT(t, "libs.hotkeys.create_relation_between_regions", "Create relation between regions")
        },
        "region:visibility": {
            "key": "alt+h",
            "description": defaultT(t, "libs.hotkeys.toggle_selected_region_visibility", "Toggle selected region visibility")
        },
        "region:visibility-all": {
            "key": "ctrl+h",
            "mac": "command+h",
            "description": defaultT(t, "libs.hotkeys.toggle_all_regions_visibility", "Toggle all regions visibility")
        },
        "region:lock": {
            "key": "alt+l",
            "description": defaultT(t, "libs.hotkeys.lock_selected_region", "Lock selected region")
        },
        "region:meta": {
            "key": "alt+m",
            "description": defaultT(t, "libs.hotkeys.edit_selected_region_meta", "Edit selected region meta")
        },
        "region:unselect": {
            "key": "u",
            "description": defaultT(t, "libs.hotkeys.unselect_region", "Unselect region")
        },
        "region:exit": {
            "key": "escape",
            "description": defaultT(t, "libs.hotkeys.exit_relation_mode_unselect_region", "Exit relation mode, unselect region")
        },
        "region:delete": {
            "key": "backspace",
            "description": defaultT(t, "libs.hotkeys.delete_selected_region", "Delete selected region")
        },
        "region:cycle": {
            "key": "alt+.",
            "description": defaultT(t, "libs.hotkeys.cycle_through_regions", "Cycle through regions")
        },
        "region:duplicate": {
            "key": "ctrl+d",
            "mac": "command+d",
            "description": defaultT(t, "libs.hotkeys.duplicate_selected_region", "Duplicate selected region")
        },
        "segment:delete": {
            "key": "delete",
            "description": defaultT(t, "libs.hotkeys.delete_selected_region", "Delete selected region")
        },
        "media:playpause": {
            "key": "ctrl+alt+space",
            "mac": "command+alt+space",
            "description": defaultT(t, "libs.hotkeys.play_pause", "Play/pause")
        },
        "media:step-backward": {
            "key": "alt+left",
            "description": defaultT(t, "libs.hotkeys.go_one_step_back", "Go one step back")
        },
        "media:step-forward": {
            "key": "alt+right",
            "description": defaultT(t, "libs.hotkeys.go_one_step_forward", "Go one step forward")
        },
        "video:keyframe-backward": {
            "key": "ctrl+alt+left",
            "mac": "command+alt+left",
            "description": defaultT(t, "libs.hotkeys.go_to_previous_keyframe", "Go to previous keyframe")
        },
        "video:keyframe-forward": {
            "key": "ctrl+alt+right",
            "mac": "command+alt+right",
            "description": defaultT(t, "libs.hotkeys.go_to_next_keyframe", "Go to next keyframe")
        },
        "video:backward": {
            "key": "alt+left",
            "description": defaultT(t, "libs.hotkeys.go_back", "Go back")
        },
        "video:rewind": {
            "key": "shift+ctrl+alt+left",
            "mac": "shift+command+alt+left",
            "description": defaultT(t, "libs.hotkeys.go_to_first_frame", "Go to first frame")
        },
        "video:forward": {
            "key": "shift+alt+right",
            "description": defaultT(t, "libs.hotkeys.go_forward", "Go forward")
        },
        "video:fastforward": {
            "key": "shift+ctrl+alt+right",
            "mac": "shift+command+alt+right",
            "description": defaultT(t, "libs.hotkeys.go_to_last_frame", "Go to last frame")
        },
        "video:hop-backward": {
            "key": "shift+alt+left",
            "description": defaultT(t, "libs.hotkeys.hop_backward", "Hop Backward")
        },
        "video:hop-forward": {
            "key": "shift+alt+right",
            "description": defaultT(t, "libs.hotkeys.hop_forward", "Hop Forward")
        },
        "repeater:next-page": {
            "key": "alt+right",
            "description": defaultT(t, "libs.hotkeys.next_page", "Next Page")
        },
        "repeater:previous-page": {
            "key": "alt+left",
            "description": defaultT(t, "libs.hotkeys.previous_page", "Previous Page")
        },
        "image:prev": {
            "key": "ctrl+left",
            "mac": "command+left",
            "description": defaultT(t, "libs.hotkeys.previous_image", "Previous Image")
        },
        "image:next": {
            "key": "ctrl+right",
            "mac": "command+right",
            "description": defaultT(t, "libs.hotkeys.next_image", "Next Image")
        },
        "tool:zoom-in": {
            "key": "ctrl+plus",
            "mac": "command+plus",
            "description": defaultT(t, "libs.hotkeys.zoom_in_on_the_image", "Zoom in on the image")
        },
        "tool:pan-image": {
            "key": "H",
            "description": defaultT(t, "libs.hotkeys.pan_around_the_image", "Pan around the image")
        },
        "tool:zoom-to-fit": {
            "key": "shift+1",
            "description": defaultT(t, "libs.hotkeys.zoom_to_fit_the_full_image_in_view", "Zoom to fit the full image in view")
        },
        "tool:zoom-to-actual": {
            "key": "shift+2",
            "description": defaultT(t, "libs.hotkeys.zoom_to_actual_image_size_100_", "Zoom to actual image size (100%)")
        },
        "tool:zoom-out": {
            "key": "ctrl+minus",
            "mac": "command+minus",
            "description": defaultT(t, "libs.hotkeys.zoom_out_of_the_image", "Zoom out of the image")
        },
        "tool:ellipse": {
            "key": "O",
            "description": defaultT(t, "libs.hotkeys.select_the_ellipse_tool", "Select the ellipse tool")
        },
        "tool:eraser": {
            "key": "E",
            "description": defaultT(t, "libs.hotkeys.select_the_eraser_tool", "Select the eraser tool")
        },
        "tool:auto-detect": {
            "key": "M",
            "description": defaultT(t, "libs.hotkeys.use_the_auto_detect_tool_to_automatically_suggest_regions", "Use the auto-detect tool to automatically suggest regions")
        },
        "tool:rect-3point": {
            "key": "shift+R",
            "description": defaultT(t, "libs.hotkeys.draw_a_rotated_rectangle_using_3_point_selection", "Draw a rotated rectangle using 3-point selection")
        },
        "tool:key-point": {
            "key": "K",
            "description": defaultT(t, "libs.hotkeys.select_the_key_point_annotation_tool", "Select the key point annotation tool")
        },
        "tool:magic-wand": {
            "key": "W",
            "description": defaultT(t, "libs.hotkeys.select_the_magic_wand_tool_for_smart_region_selection", "Select the magic wand tool for smart region selection")
        },
        "tool:polygon": {
            "key": "P",
            "description": defaultT(t, "libs.hotkeys.select_the_polygon_annotation_tool", "Select the polygon annotation tool")
        },
        "tool:rect": {
            "key": "R",
            "description": defaultT(t, "libs.hotkeys.select_the_rectangle_annotation_tool", "Select the rectangle annotation tool")
        },
        "tool:rotate-left": {
            "key": "alt+left",
            "description": defaultT(t, "libs.hotkeys.rotate_the_image_90_to_the_left", "Rotate the image 90° to the left")
        },
        "tool:rotate-right": {
            "key": "alt+right",
            "description": defaultT(t, "libs.hotkeys.rotate_the_image_90_to_the_right", "Rotate the image 90° to the right")
        },
        "tool:move": {
            "key": "V",
            "description": defaultT(t, "libs.hotkeys.select_the_move_tool_to_reposition_annotations", "Select the move tool to reposition annotations")
        },
        "tool:brush": {
            "key": "B",
            "description": defaultT(t, "libs.hotkeys.select_the_brush_tool", "Select the brush tool")
        },
        "tool:decrease-tool": {
            "key": "[",
            "description": defaultT(t, "libs.hotkeys.decrease_tool_size", "Decrease tool size")
        },
        "tool:increase-tool": {
            "key": "]",
            "description": defaultT(t, "libs.hotkeys.increase_tool_size", "Increase tool size")
        },
        "phrases:next-phrase": {
            "key": "ctrl+down",
            "mac": "command+down",
            "description": defaultT(t, "libs.hotkeys.move_to_next_phrase", "Move to next phrase")
        },
        "phrases:previous-phrase": {
            "key": "ctrl+up",
            "mac": "command+up",
            "description": defaultT(t, "libs.hotkeys.move_to_previous_phrase", "Move to previous phrase")
        },
        "phrases:next-region": {
            "key": "ctrl+left",
            "mac": "command+left",
            "description": defaultT(t, "libs.hotkeys.select_next_region_in_current_phrase", "Select next region in current phrase")
        },
        "phrases:previous-region": {
            "key": "ctrl+right",
            "mac": "command+right",
            "description": defaultT(t, "libs.hotkeys.select_previous_region_in_current_phrase", "Select previous region in current phrase")
        },
        "phrases:select_all_annotate": {
            "key": "ctrl+shift+a",
            "mac": "command+shift+a",
            "description": defaultT(t, "libs.hotkeys.select_all_and_annotate_current_phrase", "Select all and annotate current phrase")
        }
    }

}
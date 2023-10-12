'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d4b0a53b670605662590cb118f7b159a",
"index.html": "52ddd0965f1ae076536e3eb65b110414",
"/": "52ddd0965f1ae076536e3eb65b110414",
"main.dart.js": "668705bff68029cad32241fe947bcf74",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "84255a96896b9ecdfa250c54fffa572c",
"icons/favicon-16x16.png": "2f7523d2009dc1837a2137a61a060313",
"icons/Icon-192.png": "9c3a4edbded0f4302aaed49a7c1ef08a",
"icons/Icon-maskable-192.png": "9c3a4edbded0f4302aaed49a7c1ef08a",
"icons/favicon-96x96.png": "87e87c5a5a400d35b1e80dc13a7b89cd",
"icons/Icon-maskable-512.png": "7d8338a27b624e67c30e9aa225ad9d6e",
"icons/Icon-512.png": "7d8338a27b624e67c30e9aa225ad9d6e",
"icons/favicon-32x32.png": "26bf37c60c26f8675c1e868c4567c0e3",
"manifest.json": "8f9dbb00977497f6b51a95b60aedd2c7",
"assets/AssetManifest.json": "66228d75365068ee59cb24ae251e5054",
"assets/NOTICES": "2bcbc8203f581fe70f497c3a82cbff89",
"assets/FontManifest.json": "73bef7df39db9366b9bba045d53b619d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ccde9ed6a3cb462d9cce8928a4b4e441",
"assets/fonts/MaterialIcons-Regular.otf": "dbd7fd41f3ece09c11562868c26ca7d5",
"assets/assets/drawable-night/quick_action_addon_icon.png": "658e75886c14cc0251399a52160ac0a5",
"assets/assets/drawable-night/enterpass_icon.png": "11db6c1a039fa8cc5ce5b27c34351d77",
"assets/assets/drawable-night/profile_tab_preesed.png": "eefb697cdb78ac1733e5aee9c2efd1b8",
"assets/assets/drawable-night/ic_add_more_location_icon.xml": "5de2ddcffd387c355d3fd2c4d3cfeb4f",
"assets/assets/drawable-night/quick_action_upgrade_icon.png": "bd9bb6c3f718bf510e5d734ea601ad5a",
"assets/assets/drawable-night/quick_action_reload_icon.png": "4595b240522df45c412363c9ba357649",
"assets/assets/drawable-night/cvp_icon.png": "88e301621c1fc2210afd65dc640847e9",
"assets/assets/drawable-night/quick_action_paybill_icon.png": "08ba9d3299a2b93492140e82b13c30d5",
"assets/assets/drawable-night/quick_action_inventory_icon.png": "2834fd1c181eec20bb470892326b6d13",
"assets/assets/drawable-night/sales_performance_icon.xml": "97ec76170180400ce2793d48f9ffd7d7",
"assets/assets/drawable-night/search_bar_icon.xml": "be4e1510cb422bd029686de64a7525f5",
"assets/assets/drawable-night/quick_action_light_icon.png": "55e49d89a0899cac7a60419434d3cf17",
"assets/assets/drawable-night/add_cart_background_title.png": "5e4f2a029bba30cb86ecc578767e2c4b",
"assets/assets/drawable-night/quick_action_cvp_transfer_icon.png": "9a9763a8e545bd0216192f6606701720",
"assets/assets/drawable-night/manage_staff_icon.xml": "2da64748901d767f2491a884f825c574",
"assets/assets/drawable-night/supported_devices_icon.png": "aad5c815351bea673275c223ae988ec7",
"assets/assets/drawable-night/calendar_icon_btn_svg.xml": "7ab06a19d89864a9cc00057fb2bc209c",
"assets/assets/drawable-night/change_password_icon.png": "447f419912b83dc619e04ff8221c3550",
"assets/assets/drawable-night/statastics_tab_pressed.png": "637130e8bd36f6413efdba3a405f6ba2",
"assets/assets/drawable-night/quick_action_logout_icon.png": "7e48e0e974f71ad59f9cbf85daba28f3",
"assets/assets/drawable-night/edit_profile_icon.png": "c48b4340052f342d34d4aa31b5ebea56",
"assets/assets/drawable-night/store_name_icon.png": "276a5f56371a66e94d7d1e5b1e6fa993",
"assets/assets/drawable-night/message_tab_pressed.png": "62f100ea784a044079426f6a3be8f7f2",
"assets/assets/drawable-night/quick_action_sim_replacement.png": "00aa5758925a3fcfb6f8a048d3a03c0c",
"assets/assets/drawable-night/home_menu_icon_bottom_navigation_bar.png": "20741f901fbb9125160aab7fe3dd0863",
"assets/assets/drawable-night/coverage_map_icon.png": "ed8548e0e0aa6b48fbca58f754d3226d",
"assets/assets/drawable-night/username_icon.png": "c4b7cafd67da1cba6d9b7395e58bab07",
"assets/assets/drawable-night/quick_action_plans_icon.png": "108676864e9e57a5effe95b43371f0da",
"assets/assets/drawable/icon_logout.png": "ba3f7e1819e1671f75ca32b109960aa9",
"assets/assets/drawable/valid_three.png": "bda257fb1d2a4aca961d0e8ae7383b5c",
"assets/assets/drawable/bg_theme_blue.xml": "e6356aefbee66ee83df0230c86a39790",
"assets/assets/drawable/wrong.png": "145fcef1c2eae4cb1301c114760e6aa5",
"assets/assets/drawable/valid_four.png": "91e8c4902853b5f3b2fc57744f35aad3",
"assets/assets/drawable/ic_exit_to_app_white_24dp.png": "098c237aaf42e86df1e584d6769d275d",
"assets/assets/drawable/add.png": "2f868888cefb1037b0e2e5d8ff6c68d6",
"assets/assets/drawable/replay.png": "d2236bb89e5f8c78c5b343684e929c76",
"assets/assets/drawable/sidebar_logout.png": "6e45dbbe21f4b7418aa2a4d1b5967737",
"assets/assets/drawable/bottom_rounded_corner.xml": "aae84a23e9156ab75ed58be31329fde0",
"assets/assets/drawable/ekyc_skip_btn_text_color.xml": "2120087ec9830534f1eb6f168026eeb2",
"assets/assets/drawable/role_icon_small.png": "3436fa500cb06bb6256168c559530949",
"assets/assets/drawable/radio_btn_unchecked.png": "c2c98176a64fa5bc4368c8a5ecf89e4f",
"assets/assets/drawable/third_bottom_round_corner_addon.xml": "9a332bd2686a139092efd8cd92f3738b",
"assets/assets/drawable/gray_gradient_title_bg.png": "406bee6e9df1456e26bcc5e456de7e51",
"assets/assets/drawable/button_rounded_corners.xml": "a9a25da428d52815fddae23a5c209f34",
"assets/assets/drawable/ic_newcustomer.xml": "bff79eef0b36c75eb1b899cae8dc7eb3",
"assets/assets/drawable/product_tab_selector.xml": "a1b00ecb559aa24554706b2252fef603",
"assets/assets/drawable/quick_action_addon_icon.png": "e13bbb2fc4509c841f858ee6926d8900",
"assets/assets/drawable/selector_edit_text_text_color.xml": "c38d1e4dd0382342ce30356856f4baa5",
"assets/assets/drawable/sim_card_copy.png": "50c1b2183a9016f9b5c22d1d0b3f5450",
"assets/assets/drawable/ic_action_done_all.png": "9fd0c708a6b2e375781c7b79a1857c1a",
"assets/assets/drawable/ic_undo_dddddd.png": "e280a0218c6b42bd755d022227edd044",
"assets/assets/drawable/correct.png": "fb463db1f84eb2ded90a0acd32433ec1",
"assets/assets/drawable/ic_arrow_back_black_24dp.png": "d7c86f301905b46d96d872df531c8afc",
"assets/assets/drawable/checkout_btn_sel.xml": "564d94d350e4de4a9a2cbfb508e25942",
"assets/assets/drawable/bank_circle_in_progress.png": "b96d4030a01d7cc101fa3e64c0e175bf",
"assets/assets/drawable/radiobtn_rounded_corners.xml": "0f39999613fe2142010b66b69d06006a",
"assets/assets/drawable/messages_tab_grey.png": "71d73d2e2a1de028487f848e705ef979",
"assets/assets/drawable/home_tab_grey.png": "f99496f7a5a9fa9a66ed96b90f1d4870",
"assets/assets/drawable/line_divider.xml": "5342408c84da30f956f481b6f6efe27b",
"assets/assets/drawable/edit_text_cursor.xml": "1a5ac5ae2eed25eb86e0128cb8d6cbb8",
"assets/assets/drawable/id_check_icon.png": "c4920e406e31771ee9be3ecca1bdf92f",
"assets/assets/drawable/icon_checkin.png": "5faf503abf6ba97fa424c16b9988abbf",
"assets/assets/drawable/transaction.png": "3c45a8b3ae3e991bb754cf8175447e18",
"assets/assets/drawable/not_blacklist.xml": "79e6b98fca94424597b0dd9c1c1cc6ea",
"assets/assets/drawable/race_background_curved_transparent_border.xml": "0e156852bf6cfd4f047f80cae509e061",
"assets/assets/drawable/my_kad_drawable.xml": "4db90e9abd0fa93c39b93f0c1dd313ca",
"assets/assets/drawable/enterpass_icon.png": "7be2fd48d51b8356d784c9279b8dfe07",
"assets/assets/drawable/tv_rounded_corners.xml": "ec6495676536f49e8fea016dbef4ab64",
"assets/assets/drawable/checkbox_unselected_white_icon.png": "a249e436edd251ec921da08f642444ee",
"assets/assets/drawable/ekyc_start_btn.xml": "2292746d2bc61c21db2ca4e9f8ba6195",
"assets/assets/drawable/edit_action.png": "18be15178c98a25f32dfdea71b79b71c",
"assets/assets/drawable/rectangle_background.xml": "2c97a4722a024abc2d806ae008dffe0e",
"assets/assets/drawable/valid_one.png": "2de439ddca11a56c8c06054228c0fc95",
"assets/assets/drawable/inventory_add_icon.png": "d52b2ac1a420216cc5e39286c00f1d4d",
"assets/assets/drawable/profile_tab_preesed.png": "f2f8f90f5313a6b98e47aad0521aa895",
"assets/assets/drawable/radio_flat_text_selector.xml": "f6d19007eec3d4501fb7dccf6909a764",
"assets/assets/drawable/quick_action_pay_bill.png": "a321881e14dffcd160b1df481a9f474f",
"assets/assets/drawable/ic_stat_watch_later.png": "822deb05d83fa7b67f0f7b036ae66e9b",
"assets/assets/drawable/tv_selected.xml": "aa0bef39a3e0538a18263261cbcc4380",
"assets/assets/drawable/ekyc_choose_ic_dialog_background.xml": "e96eebd22891907f09f1e6c9f4204295",
"assets/assets/drawable/ic_cvp.xml": "38d0afbc2871e5b257bdeafa67c3df29",
"assets/assets/drawable/button_pink_bg.xml": "e96288ee22689cbea18fbd6e257517ef",
"assets/assets/drawable/second_bottom_round_add_on.xml": "9a332bd2686a139092efd8cd92f3738b",
"assets/assets/drawable/ic_delete_white_24dp.png": "091336e2fb5f425efb0edad897420a71",
"assets/assets/drawable/three.png": "636b1844671e77c9bbbc798b473889b6",
"assets/assets/drawable/ic_credit_card_black_24px.xml": "299aeff8162ee0e4e676fa28a44e5265",
"assets/assets/drawable/messages_tab_selector.xml": "70bccbc4cc11487d865b9f9a85dac8d1",
"assets/assets/drawable/black_radius.xml": "6495b05c1b293cc38f8aabbc1468ab55",
"assets/assets/drawable/drop_down_arrow.png": "0dce1e1e5a816d1413519a8b62f9f41f",
"assets/assets/drawable/alphabet_default.xml": "0ea1de3faa73e853d1b79c602d8cf62e",
"assets/assets/drawable/white_radius.xml": "be337ef9df00108252029411f67b686e",
"assets/assets/drawable/button_blue_bg.xml": "ea5d3e41991b1e60a91d125c925178d2",
"assets/assets/drawable/branch_selected_background_color.xml": "5ef7e8c7a55ddd808de5f95565efd469",
"assets/assets/drawable/alphabet_selected.xml": "172f7d19ebf262e5b3745473fcbf2dbf",
"assets/assets/drawable/verify_btn_background.xml": "b8f9a30eb98bf8eff270cd7b54fe4a72",
"assets/assets/drawable/map_search_box_bg.xml": "b120bfe91031c60c5e8336dcedba448e",
"assets/assets/drawable/existing_customer.png": "52891c7388e26c20c8bc4a05250261fa",
"assets/assets/drawable/card_background.xml": "204fbe797015605a6af372b93cf2c2cc",
"assets/assets/drawable/first_add_on_bottom_round_corner.xml": "a3913d87dc8215b872de04b985fa6bfe",
"assets/assets/drawable/ic_shutter_normal.xml": "326c2586cc88c6cbc1713be990a09544",
"assets/assets/drawable/quick_action_upgrade_icon.png": "40644902d05f2346ee1f2b3c3027e22d",
"assets/assets/drawable/radio_flat_text_selector_grey.xml": "d9c37bb1272747d1a0cc8ee25403d06a",
"assets/assets/drawable/product_tab_pressed.png": "6cf15f2490e87b3b8991765f560d811a",
"assets/assets/drawable/radio_flat_selector_grey.xml": "8256e435bdd8454c3891ebb474755b36",
"assets/assets/drawable/credit_card2.png": "6bc8af0f09cb5c4711e7588ccb274e68",
"assets/assets/drawable/first_add_ons_top.xml": "a16255ac9f86b6868ac17deadeadd9d8",
"assets/assets/drawable/aspiner.xml": "e697dbfe0c5a2052ac83116c8ff5427a",
"assets/assets/drawable/quick_action_edit_profile_icon.png": "859e113042e685a18f3e83ba1cbde51b",
"assets/assets/drawable/grey_circle_readius.xml": "372c1e7726e656e5c75004d0595b8427",
"assets/assets/drawable/selector_switch.xml": "c3ceed81f54b244bf6ff840f73b2a6f5",
"assets/assets/drawable/radio_btn_text.xml": "b49a7d18627e0cfc497e28a368e24997",
"assets/assets/drawable/radio_btn_selector_dark.xml": "23057f50c2c4ffd3aec15755dfa38669",
"assets/assets/drawable/ic_shutter.xml": "6c63db24667ccc3e7c33c2b067b812be",
"assets/assets/drawable/edit_text_divider_selected.xml": "639c5d0bf7b646c5ee5a7ef64359eea4",
"assets/assets/drawable/ekyc_replay_btn.xml": "c497b44ea2b27823248c60b0e4ff31fc",
"assets/assets/drawable/icon_scan.png": "026b5e364c613f3f7e32ae1eb7b08ada",
"assets/assets/drawable/reports.png": "789fb3674cb54780595a91af4dfc103a",
"assets/assets/drawable/marker2.png": "289417fec0fdf3fd7d2f09fcd2a690ee",
"assets/assets/drawable/pay_button_text.xml": "5d827658599d5a175b5a9f13865de743",
"assets/assets/drawable/ic_search_pink.xml": "a0d0c1a237ccf6ee79cf337b6c2e4f51",
"assets/assets/drawable/third_add_on_top.xml": "a16255ac9f86b6868ac17deadeadd9d8",
"assets/assets/drawable/failed_transaction_icon.png": "b3771bdce8b65f73843fbc4e5dd9520d",
"assets/assets/drawable/ic_photo.xml": "ed223f083c48bcd0d13607553088e720",
"assets/assets/drawable/background_grey_button.xml": "58e7a18e00f114a233a9bac4035c74f9",
"assets/assets/drawable/right_arrow.png": "b0ca3dac0955171a12b12cf2291425bb",
"assets/assets/drawable/back_arrow_icon.png": "5bba23068d0ecf6d096aa7a6b34502af",
"assets/assets/drawable/abc_ic_ab_back_mtrl_am_alpha.png": "7330d45ed2f65f036c847d97d50cb987",
"assets/assets/drawable/arrow_below_icon.png": "7d9fb31e0675f56aa96c81ca16e0f92b",
"assets/assets/drawable/close_icon_reload.png": "010b6f31e9c682bb7ed6f76670f30331",
"assets/assets/drawable/second_add_ons_top.xml": "a16255ac9f86b6868ac17deadeadd9d8",
"assets/assets/drawable/ic_add.xml": "a5f60b77f783a1154b6e3769bab3e965",
"assets/assets/drawable/back_button_white_arrow.png": "77638e9c23e5ecb39e615b95b8d4d863",
"assets/assets/drawable/clear_btn_sel.xml": "0e0b1481e2deab3c9a93e641f4025152",
"assets/assets/drawable/online_button.xml": "7a49111c0ef09fe7a4afd12a3feed1a8",
"assets/assets/drawable/indian_selector.xml": "345c00b7a0c6a8db07c6f9d45ed85618",
"assets/assets/drawable/button_rounded_light.xml": "ed5e462c8ef0a03c8293b14ad16fe657",
"assets/assets/drawable/background_pink_border_button.xml": "7244f18f4a748aeaa4e0a381dac6f584",
"assets/assets/drawable/fingerprint_icon.png": "fae0927e23139fd078c48eaeeb66514a",
"assets/assets/drawable/cursor_textinput_edit_text.xml": "f1bfca1beb230067f77160d99b06217c",
"assets/assets/drawable/toggle_off.png": "14b18ff2601314460758814072bbb15a",
"assets/assets/drawable/circle_step_enable.xml": "a0c97b691400ba39813d313ff3bdd8ea",
"assets/assets/drawable/button_text_color_sel.xml": "703456352ccdd1c18dffb4d7c7c66445",
"assets/assets/drawable/mobile_toggle_on.xml": "b01f021ff39c396d0c1c994c39e31f2b",
"assets/assets/drawable/quick_action_reload_icon.png": "e0f175dc151560d8c10927fd2494f85b",
"assets/assets/drawable/credit_card.png": "0af7dbf36a35755e5baf22abd7ac36e1",
"assets/assets/drawable/log_out.png": "3e67ce675e7d53fdfa0216b78f1c6ad6",
"assets/assets/drawable/double_border_bg.xml": "f06849a9001964091a30bcdf558520e2",
"assets/assets/drawable/dropdown_menu.png": "55abe2cd99b9ea81964f108f753222de",
"assets/assets/drawable/cvp_icon.png": "aaef4aac6a1e6e906fe8ddb5ab78474b",
"assets/assets/drawable/button_blue_yonder_border.xml": "e97ccb30414fde299eda6d378960d642",
"assets/assets/drawable/reload_text_hover.xml": "d0a5a0839a5a433be4fceba42f38cc47",
"assets/assets/drawable/profile_tab_grey.png": "3a6f6755baab588b3400e64b175c383d",
"assets/assets/drawable/background_grey_button_small.xml": "cece4df227433d2faabb2247e1cbaaf3",
"assets/assets/drawable/radio_btn_checked.png": "0d344309778542a24d5cb29fd1ea0aa2",
"assets/assets/drawable/final_passport.gif": "aa5673e4ff777b8d8c4f627ea9af0561",
"assets/assets/drawable/dealer_switch_login_btn.png": "5abd18ee087d0e5ad8e70cafe02d7278",
"assets/assets/drawable/blacklist.xml": "4455d58fe179f81387619480ea9852cb",
"assets/assets/drawable/ic_action_flash_on.png": "bf701a03d1177bcdefbf92bf42149984",
"assets/assets/drawable/btn_bordor_color_pink.xml": "985be3dbe85170f101261cf48e36931c",
"assets/assets/drawable/blue_background_rounded_corner.png": "29fc881104c0ba0ae0f5e8bbcaff5844",
"assets/assets/drawable/quick_action_paybill_icon.png": "24e1eade38dc654c37f87d3353646e17",
"assets/assets/drawable/yeslogo.png": "caad43f1c7979ecbf300b843c5a94a65",
"assets/assets/drawable/ic_shutter_pressed.xml": "26e82c8a69159facd603dd129254d25d",
"assets/assets/drawable/next_track_button.png": "3c00946b98de6a03cdcc71b20f4784d0",
"assets/assets/drawable/registation_bottom_sheet_item_background.xml": "0bdeb064f75b2ceb29d14a7c7f776efa",
"assets/assets/drawable/green_circle.xml": "960e2e6e92dedb123cf392356150d1a7",
"assets/assets/drawable/red_circle.xml": "1dfa6342642a08beafe79769f6f8639b",
"assets/assets/drawable/my_kad.png": "e4817039fe7ecb5297ba31b676576143",
"assets/assets/drawable/hide_password.png": "3e8d05a12c2324063d4e3fbaa047a95f",
"assets/assets/drawable/pay_button_background.xml": "f5359799b7191ede45906609d86f1213",
"assets/assets/drawable/grid_selector.xml": "ee0a6869b6427af21d35e2fa34957995",
"assets/assets/drawable/ic_delete.xml": "85af27fa0194a8b05816381009784353",
"assets/assets/drawable/ekyc_facial_recognition_btn.xml": "bc3b3c44c7d1351d81e3ab2c38ebbb76",
"assets/assets/drawable/prepaid_icon_bottom_sheet.png": "52071de14bb05170bfdce3ab9af835f1",
"assets/assets/drawable/two.png": "69159bcb0771941627628aff8bca4a12",
"assets/assets/drawable/circle_step_disable.xml": "7144bca5e1d0107eb3ccb36f5c98e052",
"assets/assets/drawable/search_icon.png": "46cdc91ed970fc5484cd579a092fe352",
"assets/assets/drawable/quick_action_inventory_icon.png": "2009820e4bfc5bd63ee917afc227a0a0",
"assets/assets/drawable/circle_step_selector.xml": "3710ca7a82d1972397e48a4ed0015a52",
"assets/assets/drawable/confirmation.png": "a311256d06161a91eea3ae8917cdc744",
"assets/assets/drawable/fr_animation.gif": "7b8ee44f304a5123736bd276d33186ca",
"assets/assets/drawable/alphabet_separator_bg.xml": "c7583598f422d499d56bf837074d9943",
"assets/assets/drawable/ic_action_flash_off.png": "f12c37b9b9af7c967b2f345a9133a3e8",
"assets/assets/drawable/stocks_icon.png": "992440cde6ca2b81fb1c5e855747aee2",
"assets/assets/drawable/flashlight_inverse.xml": "33ac7d6a9e8e04caa8455f67f83f47f8",
"assets/assets/drawable/border_thin_line.xml": "123db439cfd58c611af3a74960441047",
"assets/assets/drawable/action_tar_bar_selector.xml": "8da0e58732c491a19b79d1e1a8c2862a",
"assets/assets/drawable/remark_btn_sel.xml": "759d50477f54eb92c283a3658af7d55e",
"assets/assets/drawable/fourth_bottom_round_corner_addon.xml": "9a332bd2686a139092efd8cd92f3738b",
"assets/assets/drawable/button_grey_bg.xml": "11c8558331e9ca137556f841408717a2",
"assets/assets/drawable/unhr.png": "b5db6128dcc82f7e76400fb7ff479d60",
"assets/assets/drawable/ic_arrow_back.xml": "964458ac1ed2c2aee709d3d359b0d486",
"assets/assets/drawable/fifth_add_on_top.xml": "a16255ac9f86b6868ac17deadeadd9d8",
"assets/assets/drawable/plus_small_color.png": "13bccc755663b31274d2c81f6f66e0c8",
"assets/assets/drawable/ic_switch.xml": "4d8af77634b97901ea3b11f34e58fab7",
"assets/assets/drawable/yes.png": "b281a2ceda9a2ab208da23ce284c4188",
"assets/assets/drawable/top_up_cvp_icon.png": "81758a04ae155d8bd9b015ae1fcdb273",
"assets/assets/drawable/receipt_logo.jpg": "dc8f9b84d7eb34d1a83e96ebb0f80718",
"assets/assets/drawable/ic_share.xml": "378ec0b513ac788026a9efcc2f44aacf",
"assets/assets/drawable/new_reg_transparent_background.png": "7b66f28922862761785ce3c334d99c88",
"assets/assets/drawable/online_on.png": "4f7a3d73922abfa2fca1206116b881a9",
"assets/assets/drawable/icon_sync.png": "fb992287873cc42c5e991a1725ce050a",
"assets/assets/drawable/ok_big.xml": "d2ec95b74cb62a094fd73204cb7b7d1d",
"assets/assets/drawable/add_supplementary_line_icon_bottom_sheet.png": "c7a592c7430ebf90db9a7cbd660a1ded",
"assets/assets/drawable/flashlight.xml": "b737c0ab2768a8ab865211d28f3a57f0",
"assets/assets/drawable/id_selection_btn_selector.xml": "5f03049c6a8604ae8875b4f2534be7d0",
"assets/assets/drawable/infinite_icon_bottom_sheet.png": "95ab21c8a00afbae2ec4755a6a6f19f4",
"assets/assets/drawable/radio_rectangle_curved_corner.png": "f1129c85cebe14ed863f393f54be630d",
"assets/assets/drawable/login_btn_text_color.xml": "e326c758152bcf4f7c5a051c336c8a68",
"assets/assets/drawable/ic_action_done_green.png": "068ad462034fe97f29648c7d1787aaaf",
"assets/assets/drawable/ic_creditcard.xml": "96c736be6c2a69d7f2ac0a03cef75db5",
"assets/assets/drawable/ic_action_delete_supplementary_line.png": "48933caf8269ece9f28737b3fdb4f8e6",
"assets/assets/drawable/product_tab_grey_icon.png": "ac28f1a21acca5eca7e4c127a9b5a7b5",
"assets/assets/drawable/passport.png": "ac8f76903179f34c6312ac60ceaa766e",
"assets/assets/drawable/ekyc_skip_btn.xml": "84d6d01d5bf8e46aa8c1ac5fd57b1b41",
"assets/assets/drawable/search.png": "7e72ff795e296a8a7196eb29de03c894",
"assets/assets/drawable/race_invalid.png": "3da931ff5abf588d72a0ca10e67a1c01",
"assets/assets/drawable/port_in.png": "f49422bf6575815faf57463bba11ff69",
"assets/assets/drawable/dealer_stock_btn_background.xml": "a9b1d271165b610fcb6110b653cff3d6",
"assets/assets/drawable/checkbox_selected_blue_icon.png": "c1f73c0f7769ca43a32e43a40783f826",
"assets/assets/drawable/fade_red.xml": "11e2305eac1fdc0fab6fd5df4be10261",
"assets/assets/drawable/rectangle_background_white.xml": "26d5d23db3a539a66471aa8dab3549dc",
"assets/assets/drawable/button_rounded_selected.xml": "349d912e7090ce1ec2be666555e741a1",
"assets/assets/drawable/login_button_background.xml": "b8df312a0c0c06809887da72030575c4",
"assets/assets/drawable/adapter_rectangle_view.xml": "867aeafebf88fb5729400cf0dbfec6f8",
"assets/assets/drawable/togglebutton_rounded_corners.xml": "59471ab02fcbb28e3671a947739c62b8",
"assets/assets/drawable/round_button.xml": "69c5bc7f552aab21e2675a9a07e22408",
"assets/assets/drawable/others_selector.xml": "4e1dc430c6d3a8b9488b367c9691674b",
"assets/assets/drawable/edit_text_divider_selected_white_bg.xml": "c3db543b9d5008e98f8bdad4d474cd7d",
"assets/assets/drawable/background_transparent_image.png": "20b1fd7f676aa94c05e68911ff6e3b72",
"assets/assets/drawable/new_reg_background.png": "b671725558977c2a0258898c4aeffa81",
"assets/assets/drawable/quick_action_item_border_selector.xml": "0b9f13d23a612c7f4f70efab81d62b13",
"assets/assets/drawable/plus_small_tr.png": "280724320e9706f7038b2ca8a9c913e5",
"assets/assets/drawable/reload_bottom_sheet_item_border_selector.xml": "9eb29b6864affc82931c91d17b354cce",
"assets/assets/drawable/change_plan.png": "2ddab12830dd8fc08c1732836230171c",
"assets/assets/drawable/ic_action_refresh.png": "458c643d6f246f0da639b51eb3b20737",
"assets/assets/drawable/ic_rotate.xml": "42657a0d01432edd410794a0a32dfa6c",
"assets/assets/drawable/login_btn_hover.xml": "10ba51b46f01c5984cfc13dcc5286e65",
"assets/assets/drawable/toggle_btn_ios.xml": "da2bf5a5cdee6cfe96d6a0c1b31d4e62",
"assets/assets/drawable/splash.jpg": "194fe18222b5fb0d898cd31efa1c2d32",
"assets/assets/drawable/button_rounded_bill_payment.xml": "d3f0ed1fdad936178e79e0a6927a07c3",
"assets/assets/drawable/malay_none_select.png": "386a129abe7ec06463b99e001ea7b4d3",
"assets/assets/drawable/circular_profile_icon.png": "e0a344e3bde7fcb9a0136bf40d147d8a",
"assets/assets/drawable/quick_action_cvp_transfer_icon.png": "bb30c097d73d842c4a9cd5ae8ed18d21",
"assets/assets/drawable/green_drawable.xml": "0e8da1d3b964b7099fccb1527d001b55",
"assets/assets/drawable/transfer_stock.png": "4be0e3ef78376de851316c0a69b046ac",
"assets/assets/drawable/supported_devices_icon.png": "f6cb8f9d75f88062f9cc6c4f16b0447b",
"assets/assets/drawable/black_radius_square.xml": "6b1c2a57c0872138d6825276fcbdd909",
"assets/assets/drawable/online_off.png": "15b0e712849a2cdc9cc4ddab4b62b62f",
"assets/assets/drawable/water_mark.png": "d9328add7c36f73014873f59b27fb034",
"assets/assets/drawable/circle_plus_new.png": "4eafdc5184fe78752f243109c755832e",
"assets/assets/drawable/button_round_retention.xml": "5b65e9d94183ed72caa09198ac80fb67",
"assets/assets/drawable/addcart_plus_small_tr.xml": "42027e28a276b3e5f03d6d55309b078a",
"assets/assets/drawable/race_button_background_curved_border.xml": "54de730d7877ffd2fa30f7f6c6841f15",
"assets/assets/drawable/billpayment_rounded_bg.xml": "a87f67cec53b0ffe6bd9371d35c603c4",
"assets/assets/drawable/radio_button_selector.xml": "5668ae342b26f96d2e2f0b49d85a614d",
"assets/assets/drawable/exsiting.png": "befc97295dfd41099d29817fee39785c",
"assets/assets/drawable/mobile_toggle_off.xml": "0b42da8e7a109e585f824f781a7e39bb",
"assets/assets/drawable/ic_blacklist_green.xml": "82a5054b1658196e743f67f93728ae9a",
"assets/assets/drawable/splash_icon_center.png": "93b6d4a44e6e5f22e284e904d03df056",
"assets/assets/drawable/help.xml": "0578fcdea1c1c9d87c158ef3efa11250",
"assets/assets/drawable/validation_correct.png": "8838d1c782d2bbca957b0077c6505490",
"assets/assets/drawable/profile_tab_selector.xml": "c2a65c665b4ca11f531af186a7a329ad",
"assets/assets/drawable/right_blue_arrow_icon.png": "426f54c31feda2d1bdd2d9e11004e5f7",
"assets/assets/drawable/ic_shortcut_done.png": "73178b3305bf592d33b949165bc3a55d",
"assets/assets/drawable/ic_menu_search.png": "0bea01fae69de687bf52b3df3b1cda13",
"assets/assets/drawable/adapter_rectangle_view_selector.xml": "88ac625dd6202575a196857854fc5de8",
"assets/assets/drawable/background_spinner.xml": "a4341f76bac8cdbe322a38245ba61159",
"assets/assets/drawable/error.png": "ec368071bedf101b4b033f55caf77799",
"assets/assets/drawable/icon_change_plan_copy.png": "c4eadb27bbebbce4758772c7872f349b",
"assets/assets/drawable/ic_action_done.png": "94b0ac1fea2ef80cde54bb91d9f44921",
"assets/assets/drawable/ic_drawer.png": "45ae81b686dc793ded957dcd9d5d589b",
"assets/assets/drawable/scanner.png": "75710b1f7a4a5d5b4b43639a91ef6eeb",
"assets/assets/drawable/change_password_icon.png": "a5fba5bfb209f4b88962db735aa184e6",
"assets/assets/drawable/radio_text_color_sel.xml": "20ae3ab7cd5dca52f9626faba452fad2",
"assets/assets/drawable/statstics_tab_selector.xml": "2588701721e51e33ef8faf297d4f6dec",
"assets/assets/drawable/button_edit_blue_rounded_square.png": "4ef8b79fa71bab20d97bb7ee51eaf0e2",
"assets/assets/drawable/default_pager_dot.xml": "3843fc657e62bfd7782b0370607071e8",
"assets/assets/drawable/validation_wrong.png": "ddc70ea02f34dda60897198ac1089587",
"assets/assets/drawable/green_check.png": "cec5aca52f8fd300f0de2545b24c360a",
"assets/assets/drawable/ic_action_delete_pink.png": "7d8a5145995b8567ea371be73e5b57e3",
"assets/assets/drawable/ic_launcher.png": "1b7f778710927d5f6a52a88264c723e6",
"assets/assets/drawable/one.png": "dc147de08bcc74edec1d8ade9d7e4130",
"assets/assets/drawable/delete_btn.png": "82891799b0c5b8a907b7d7478803c9d1",
"assets/assets/drawable/textview_on_press_color_change.xml": "0e4ed5c32612f1de88eb0f600336980f",
"assets/assets/drawable/role_based_access_bottom_bar_selector.xml": "aa3113672af28452c31b82cfbeeb9dcb",
"assets/assets/drawable/statastics_tab_pressed.png": "a74351431466d32de30c767b5f1bbb10",
"assets/assets/drawable/selected_pager_dot.xml": "3ea492fbc1d14c9423365d6ae104fdc4",
"assets/assets/drawable/ic_back.xml": "e7fcac651fe90c56bd9c45b64532996e",
"assets/assets/drawable/success_icon_pink.png": "d955bfb4951fcab6cb77b1ece8c3fc0a",
"assets/assets/drawable/ic_edit_pink.xml": "d1b1376cc3338b1e446b45a7be35d5f0",
"assets/assets/drawable/edit_text_drawable_black_border.xml": "51c24c0ef07f276a8c140b8b1c68e827",
"assets/assets/drawable/stastice_tab_grey.png": "0790de039f901fbd467462d6a6b0b623",
"assets/assets/drawable/menu_item_background.xml": "a9935170910a921b557dfc0481be06d8",
"assets/assets/drawable/stat_top_header_background.png": "76bd5532c9cc680795ff8e4f068e84f8",
"assets/assets/drawable/country_spinner_background.xml": "697b49bfdc60841840ae229cd887fda5",
"assets/assets/drawable/dotted.xml": "7250588190dd9874df7ca6b4dcadd86f",
"assets/assets/drawable/icon_registration_copy.png": "c7355dc136715c64b9f33785ce6f40e9",
"assets/assets/drawable/icon_bill_payment_copy.png": "be3b76a92f8e9575f98919aae0ac4764",
"assets/assets/drawable/tick_green.png": "2b98514502574d60244c1465caebfb51",
"assets/assets/drawable/radio_flat_selected.xml": "8725d1243767b6d03e7d4e97ab7dc71f",
"assets/assets/drawable/own_stock_icon.png": "baa137e7f9752dd6fc2be321083f56d9",
"assets/assets/drawable/spin.png": "cdf44db5c79556d8a3d2d05dc0dcc9a1",
"assets/assets/drawable/login_btn_background_color.xml": "5307acf7f05d68295badb258c6117ae7",
"assets/assets/drawable/mobile_toggle_bg.xml": "3c6731448c1958a5aae08efe3a44c289",
"assets/assets/drawable/master_card.png": "ad2cd2ef3e4a5bf1880a320e3a2409a3",
"assets/assets/drawable/change_plan_selection_cardview_bg.xml": "65d6bae741ede09e84fb5e069ff9af06",
"assets/assets/drawable/exit.xml": "7718fc3d74140947ee6b0de3b7442b54",
"assets/assets/drawable/address_border_color.xml": "a7bf3be2d06d3ffd490b5be556b91b19",
"assets/assets/drawable/confirmation_dialog_btn.xml": "b7b3e611d0536b5acbdb67d20f35ae66",
"assets/assets/drawable/verify_btn_text_color.xml": "4fe9120f3bcc15afeb248ad69aee5a60",
"assets/assets/drawable/race_select_blue_color.xml": "01a512cc1bc795c03d49b37516ec019f",
"assets/assets/drawable/cvp_background_gradient.xml": "c9bf9aa16af8df13feb2a643b2e2ff94",
"assets/assets/drawable/success_image_icon.png": "aca17bb644106376a8a230d6f0bd2ced",
"assets/assets/drawable/mac_id.png": "b3a5ca1de566190b943f972f13100023",
"assets/assets/drawable/fingerprint_icon_transfer_cvp.png": "6876438dfcd81341a922d2e350f75e63",
"assets/assets/drawable/malay_selector.xml": "44f73727027ed55907b1d54b7588ec75",
"assets/assets/drawable/tab_pager_selector.xml": "c48d4d49cca13a5f5fe9601c2b337dba",
"assets/assets/drawable/table_border.xml": "27095c4f48783a77c803f8c4dbddc239",
"assets/assets/drawable/b.xml": "a4ed64300ffff9e7ab7dad91468a21f0",
"assets/assets/drawable/circle_add.png": "70d5c98d312ca38cce77cd469329daee",
"assets/assets/drawable/yes_stock_btn_background.xml": "8b26819d0acf1c2fbe1a349f4f0a9e86",
"assets/assets/drawable/quick_action_logout_icon.png": "09c3a386b08d79ed29ca8b35ffbeee86",
"assets/assets/drawable/drawer_shadow.9.png": "d88c04632599b65c6528067663dcf2bd",
"assets/assets/drawable/visa_icon.png": "e60aa6b261d1ce1f87325112f1f2792f",
"assets/assets/drawable/yes_device_icon.png": "377fe217090a68f9c0c83192d6f6e02b",
"assets/assets/drawable/up_arrow.png": "8939063b0772bed51d4a034168ad6df9",
"assets/assets/drawable/button_round_sim_replacement.xml": "a58dc743b4d6df4d0332853021d1c4ae",
"assets/assets/drawable/cash.png": "a21deaf39293a194ba1315c01e628219",
"assets/assets/drawable/button_rounded_mnp.xml": "5b65e9d94183ed72caa09198ac80fb67",
"assets/assets/drawable/ic_stat_refresh_cvp_status.png": "86111b38c681260a763c724d518eb0db",
"assets/assets/drawable/background_race_item.xml": "2e024e53a918ce17b1d479810f0cd6c1",
"assets/assets/drawable/toggle_on.png": "757a683217f54dc4df7dee75186d51d2",
"assets/assets/drawable/edit_profile_icon.png": "859e113042e685a18f3e83ba1cbde51b",
"assets/assets/drawable/or.png": "64ac2cc180747a8388c5ac5b44fda3c0",
"assets/assets/drawable/edittext_rounded_corners.xml": "f1410c4a2f08c5685a27a37512a734d7",
"assets/assets/drawable/topbar_brandcolor_blue.png": "a36e0052bd1765a70927d992453c21ee",
"assets/assets/drawable/icon_sales.png": "4c5a787a9416005042eb0091a2fc4c3f",
"assets/assets/drawable/confirmation_dialog_text_color.xml": "754f1c8a2ff169278dcbd92c19530e7a",
"assets/assets/drawable/star.png": "2b1babb5a3c9284b1d8352a894cc815f",
"assets/assets/drawable/radiobtn_rounded_corners_par.xml": "5cd8f7c988290ceb82a6b44b3d748be5",
"assets/assets/drawable/back_arrow_white.png": "21e138977c2900c459a055dbf8710109",
"assets/assets/drawable/a.xml": "40511d3d9e30dca7f3fbe50e7010aa76",
"assets/assets/drawable/channel_mang_icon.png": "a591f569dbd2378d9a551e98b87de6f7",
"assets/assets/drawable/yes_logo.png": "fc8427f76f1cc310bd081cd3c6a3cc94",
"assets/assets/drawable/valid_two.png": "e952df3ead418a0068428a19d9d5d0d4",
"assets/assets/drawable/catalog_view.png": "9a27dc5847f704457bf9513d62d54b14",
"assets/assets/drawable/ic_exsiting_customer.xml": "608aef71a248607fe66306f0bfc63301",
"assets/assets/drawable/fourth_addon_top.xml": "a16255ac9f86b6868ac17deadeadd9d8",
"assets/assets/drawable/valid_six.png": "9d5eda6e4120cc06f461e2db0931f422",
"assets/assets/drawable/ic_undo_212121.png": "79d3a1ba53092ef4c4ad61971a4e7e0b",
"assets/assets/drawable/list_bg.xml": "0eb280c725b60d401192ce574a4210bb",
"assets/assets/drawable/visa_card.png": "724d8cf1d7a76278024d4ea336a071cf",
"assets/assets/drawable/top_rounded_corner.xml": "2dcca896268d113a4d66fc41e8d6a7ed",
"assets/assets/drawable/tv_payment_rounded_corners.xml": "a905005b94370496889604b0c256e1bf",
"assets/assets/drawable/valid_five.png": "1d1091d2ebc85d9515a79a36d08b2c6f",
"assets/assets/drawable/reload_bg.xml": "7eacdf131434a95344a9ad6dc33638f7",
"assets/assets/drawable/fr_oval_shape_overlay.xml": "dd5728fc8435df85a9bd988c60205c5f",
"assets/assets/drawable/ic_exit_app.xml": "3101f3f0a742ac629539b22795ea579d",
"assets/assets/drawable/edit_text_divider_normal_white_bg.xml": "5919219fb4664ad487d33cfb5234bae3",
"assets/assets/drawable/splash.9.png": "f4258e963817797e81ab324f7a17b616",
"assets/assets/drawable/selector_edit_text_divider_white_bg.xml": "63da1624081e13253aab67273bc851a8",
"assets/assets/drawable/new_existing.png": "38ead6a6ab18bcef27ab5636da89a243",
"assets/assets/drawable/fifth_bottom_round_corner_addon.xml": "9a332bd2686a139092efd8cd92f3738b",
"assets/assets/drawable/yes_logo_small.jpg": "0829b5dd9df5b0427a568dcda4c94067",
"assets/assets/drawable/button_round_termination.xml": "5b65e9d94183ed72caa09198ac80fb67",
"assets/assets/drawable/postpaid_icon_bottom_sheet.png": "08d23fbd945f0cb4537b0063cf433edd",
"assets/assets/drawable/button_rounded_postpaid.xml": "fc08f24506d4d74f8a7c25c42ebd1a83",
"assets/assets/drawable/icon_account.png": "851c8cf5339ba554afae2f5ccc06e972",
"assets/assets/drawable/trans_button.xml": "f723e6d706fb7df1c2e25cc311cf43ce",
"assets/assets/drawable/sidebar_profile.png": "0af5e4506d05de821259817386723866",
"assets/assets/drawable/ic_shutter_focused.xml": "26e82c8a69159facd603dd129254d25d",
"assets/assets/drawable/message_tab_pressed.png": "5efca7ff664c32e5333e5b2b5ae9a5ce",
"assets/assets/drawable/button_green_bg.xml": "93ed1c3c3f9d81177617a63effda99e5",
"assets/assets/drawable/addon_bottom_sheet.xml": "a3fed9eb7484d489cd0113dc397196cf",
"assets/assets/drawable/valid_seven.png": "dd5ad6d824ff850546407efd3c345d31",
"assets/assets/drawable/edit_text_drawable_new.xml": "6e65c30afc345353588edfa023f4e577",
"assets/assets/drawable/quick_action_sim_replacement.png": "426802949c45dfac276c7181054097e6",
"assets/assets/drawable/registration.png": "74138d979647d6b64eac718cd595e262",
"assets/assets/drawable/ic_sync_black_24dp.xml": "738fca8ec3de9ade0940a5c2a7c97b9b",
"assets/assets/drawable/blue_border_btn.xml": "87557532260ba2b1a6ee21eeffba1dca",
"assets/assets/drawable/cvp_oval_background.xml": "2c21b85673929403a9c7365f56376c41",
"assets/assets/drawable/camera_signature_border.xml": "0d565b19a259541bb1f2c2382dd806de",
"assets/assets/drawable/cart_icon.png": "70a7da369066fd39c5629aae474dd3fa",
"assets/assets/drawable/home_menu_icon_bottom_navigation_bar.png": "dd68e9c809ec6a493c9f3d1c474315a9",
"assets/assets/drawable/radio_flat_regular.xml": "8860a6698d4b89eb4384ed5514fce43f",
"assets/assets/drawable/camera_btn_sel.xml": "2b6cd8694bd29d3856a9a62a61dbf7a2",
"assets/assets/drawable/biometrics_security_title_img.png": "e05c1fda21e9787dd42ba361cd843084",
"assets/assets/drawable/grey_background.xml": "cfb429f76691dd4373ffb40ffec8b73b",
"assets/assets/drawable/checkbox_color_filter.xml": "9bc69c864bc56e84fb155fed1b662f6a",
"assets/assets/drawable/blue_radius.xml": "4882ba273d76a6060a23109fd1997ec1",
"assets/assets/drawable/button_add_card.png": "71276959fdb765a26aa2fadc2b3dbc30",
"assets/assets/drawable/valid_five_a.png": "9d5eda6e4120cc06f461e2db0931f422",
"assets/assets/drawable/mykad_animation.gif": "d00141a6c06275a7b36ee4333fb25203",
"assets/assets/drawable/remove_button_small.png": "aaafe9d2ff74b708ccf731c170a4a95b",
"assets/assets/drawable/race_invalid_transparent.png": "1cddfee60acf76471363d3c2ff90a332",
"assets/assets/drawable/text_color_label_pink.xml": "c682abf773c56f58708cc1f59041ffa3",
"assets/assets/drawable/ic_keyboard_arrow_down_black.png": "b1b04ec974f71628f66932ebcb9a7e5e",
"assets/assets/drawable/camera_icon.png": "a7fb98f752c600dd904cec63f91c1288",
"assets/assets/drawable/ic_undo.xml": "bf91df757d7664c8a633f922c932b576",
"assets/assets/drawable/chinese_selector.xml": "24d660478dc370a9edd6dd892071c57e",
"assets/assets/drawable/stats_header_background.png": "00184aeecfbbd0fe79304f6d09eae0d4",
"assets/assets/drawable/login_switch_icon.png": "c0b6c05489315831c05868161ee309fa",
"assets/assets/drawable/coverage_map_icon.png": "e22606781e94fecf59ec255b1844a808",
"assets/assets/drawable/edittext_rounded_corners_invalid.xml": "f3db735bfe642e52b3d2f3426f0d737f",
"assets/assets/drawable/quick_action_scan_icon.png": "5e6028329f87a81cd9b1f0a0a8f20568",
"assets/assets/drawable/radio_flat_selector.xml": "c75df45646f380c4130573f78a1c38fd",
"assets/assets/drawable/right_arrow_tr.png": "9691b8a52e487340d093f97a3da6094c",
"assets/assets/drawable/add_ons.png": "bb4357598d480e6b38e7a9f04608e938",
"assets/assets/drawable/reload.png": "23a6b349b297091c0de3ccc2a9ad251a",
"assets/assets/drawable/login_button.xml": "5d827658599d5a175b5a9f13865de743",
"assets/assets/drawable/edit_text_divider_normal.xml": "52ba8847171b03993c7d7bdf8e2eccee",
"assets/assets/drawable/username_icon.png": "97761a068fb38aa92a9787a8a5d8bf02",
"assets/assets/drawable/ic_home_icon.png": "000b5294b528e3ec643f816abe7cae8e",
"assets/assets/drawable/side_nav_bar.xml": "9cdcbcfb2c3229cabcef251c21bd4056",
"assets/assets/drawable/quick_action_plans_icon.png": "eb829664cd3de10b7a2a6be3128bca9f",
"assets/assets/drawable/button_text_color.xml": "a63c6140451023f83aa4acf776d244f8",
"assets/assets/drawable/radio_btn_checkbox.xml": "b0912bd2338f54677a079ccad0b90f46",
"assets/assets/drawable-xhdpi/icon_logout.png": "ba3f7e1819e1671f75ca32b109960aa9",
"assets/assets/drawable-xhdpi/valid_three.png": "bda257fb1d2a4aca961d0e8ae7383b5c",
"assets/assets/drawable-xhdpi/wrong.png": "145fcef1c2eae4cb1301c114760e6aa5",
"assets/assets/drawable-xhdpi/valid_four.png": "91e8c4902853b5f3b2fc57744f35aad3",
"assets/assets/drawable-xhdpi/ic_exit_to_app_white_24dp.png": "098c237aaf42e86df1e584d6769d275d",
"assets/assets/drawable-xhdpi/role_icon_small.png": "3436fa500cb06bb6256168c559530949",
"assets/assets/drawable-xhdpi/quick_action_addon_icon.png": "e13bbb2fc4509c841f858ee6926d8900",
"assets/assets/drawable-xhdpi/correct.png": "fb463db1f84eb2ded90a0acd32433ec1",
"assets/assets/drawable-xhdpi/ic_arrow_back_black_24dp.png": "d7c86f301905b46d96d872df531c8afc",
"assets/assets/drawable-xhdpi/bank_circle_in_progress.png": "b96d4030a01d7cc101fa3e64c0e175bf",
"assets/assets/drawable-xhdpi/messages_tab_grey.png": "71d73d2e2a1de028487f848e705ef979",
"assets/assets/drawable-xhdpi/home_tab_grey.png": "f99496f7a5a9fa9a66ed96b90f1d4870",
"assets/assets/drawable-xhdpi/icon_checkin.png": "5faf503abf6ba97fa424c16b9988abbf",
"assets/assets/drawable-xhdpi/transaction.png": "3c45a8b3ae3e991bb754cf8175447e18",
"assets/assets/drawable-xhdpi/enterpass_icon.png": "7be2fd48d51b8356d784c9279b8dfe07",
"assets/assets/drawable-xhdpi/checkbox_unselected_white_icon.png": "a249e436edd251ec921da08f642444ee",
"assets/assets/drawable-xhdpi/edit_action.png": "18be15178c98a25f32dfdea71b79b71c",
"assets/assets/drawable-xhdpi/valid_one.png": "2de439ddca11a56c8c06054228c0fc95",
"assets/assets/drawable-xhdpi/profile_tab_preesed.png": "f2f8f90f5313a6b98e47aad0521aa895",
"assets/assets/drawable-xhdpi/quick_action_pay_bill.png": "a321881e14dffcd160b1df481a9f474f",
"assets/assets/drawable-xhdpi/ic_stat_watch_later.png": "822deb05d83fa7b67f0f7b036ae66e9b",
"assets/assets/drawable-xhdpi/ic_delete_white_24dp.png": "091336e2fb5f425efb0edad897420a71",
"assets/assets/drawable-xhdpi/quick_action_upgrade_icon.png": "40644902d05f2346ee1f2b3c3027e22d",
"assets/assets/drawable-xhdpi/product_tab_pressed.png": "6cf15f2490e87b3b8991765f560d811a",
"assets/assets/drawable-xhdpi/quick_action_edit_profile_icon.png": "859e113042e685a18f3e83ba1cbde51b",
"assets/assets/drawable-xhdpi/icon_scan.png": "026b5e364c613f3f7e32ae1eb7b08ada",
"assets/assets/drawable-xhdpi/reports.png": "789fb3674cb54780595a91af4dfc103a",
"assets/assets/drawable-xhdpi/failed_transaction_icon.png": "b3771bdce8b65f73843fbc4e5dd9520d",
"assets/assets/drawable-xhdpi/banner2.png": "fd949365fab35c2cb02deb80b83a5899",
"assets/assets/drawable-xhdpi/right_arrow.png": "b0ca3dac0955171a12b12cf2291425bb",
"assets/assets/drawable-xhdpi/back_arrow_icon.png": "5bba23068d0ecf6d096aa7a6b34502af",
"assets/assets/drawable-xhdpi/arrow_below_icon.png": "7d9fb31e0675f56aa96c81ca16e0f92b",
"assets/assets/drawable-xhdpi/close_icon_reload.png": "010b6f31e9c682bb7ed6f76670f30331",
"assets/assets/drawable-xhdpi/fingerprint_icon.png": "fae0927e23139fd078c48eaeeb66514a",
"assets/assets/drawable-xhdpi/banner1.png": "8d81e87b972468c9b7da23c0addde45d",
"assets/assets/drawable-xhdpi/quick_action_reload_icon.png": "e0f175dc151560d8c10927fd2494f85b",
"assets/assets/drawable-xhdpi/dropdown_menu.png": "55abe2cd99b9ea81964f108f753222de",
"assets/assets/drawable-xhdpi/cvp_icon.png": "707eb26b6113fc0e0aed695c42c409dc",
"assets/assets/drawable-xhdpi/profile_tab_grey.png": "3a6f6755baab588b3400e64b175c383d",
"assets/assets/drawable-xhdpi/dealer_switch_login_btn.png": "5abd18ee087d0e5ad8e70cafe02d7278",
"assets/assets/drawable-xhdpi/blue_background_rounded_corner.png": "29fc881104c0ba0ae0f5e8bbcaff5844",
"assets/assets/drawable-xhdpi/quick_action_paybill_icon.png": "24e1eade38dc654c37f87d3353646e17",
"assets/assets/drawable-xhdpi/next_track_button.png": "3c00946b98de6a03cdcc71b20f4784d0",
"assets/assets/drawable-xhdpi/hide_password.png": "3e8d05a12c2324063d4e3fbaa047a95f",
"assets/assets/drawable-xhdpi/prepaid_icon_bottom_sheet.png": "52071de14bb05170bfdce3ab9af835f1",
"assets/assets/drawable-xhdpi/search_icon.png": "46cdc91ed970fc5484cd579a092fe352",
"assets/assets/drawable-xhdpi/quick_action_inventory_icon.png": "2009820e4bfc5bd63ee917afc227a0a0",
"assets/assets/drawable-xhdpi/confirmation.png": "a311256d06161a91eea3ae8917cdc744",
"assets/assets/drawable-xhdpi/yes.png": "b281a2ceda9a2ab208da23ce284c4188",
"assets/assets/drawable-xhdpi/top_up_cvp_icon.png": "81758a04ae155d8bd9b015ae1fcdb273",
"assets/assets/drawable-xhdpi/new_reg_transparent_background.png": "7b66f28922862761785ce3c334d99c88",
"assets/assets/drawable-xhdpi/online_on.png": "4f7a3d73922abfa2fca1206116b881a9",
"assets/assets/drawable-xhdpi/icon_sync.png": "fb992287873cc42c5e991a1725ce050a",
"assets/assets/drawable-xhdpi/add_supplementary_line_icon_bottom_sheet.png": "c7a592c7430ebf90db9a7cbd660a1ded",
"assets/assets/drawable-xhdpi/infinite_icon_bottom_sheet.png": "95ab21c8a00afbae2ec4755a6a6f19f4",
"assets/assets/drawable-xhdpi/radio_rectangle_curved_corner.png": "f1129c85cebe14ed863f393f54be630d",
"assets/assets/drawable-xhdpi/product_tab_grey_icon.png": "ac28f1a21acca5eca7e4c127a9b5a7b5",
"assets/assets/drawable-xhdpi/search.png": "7e72ff795e296a8a7196eb29de03c894",
"assets/assets/drawable-xhdpi/race_invalid.png": "3da931ff5abf588d72a0ca10e67a1c01",
"assets/assets/drawable-xhdpi/port_in.png": "f49422bf6575815faf57463bba11ff69",
"assets/assets/drawable-xhdpi/quick_action_light_icon.png": "da143b5c70eba34c2e94e2d390557270",
"assets/assets/drawable-xhdpi/checkbox_selected_blue_icon.png": "c1f73c0f7769ca43a32e43a40783f826",
"assets/assets/drawable-xhdpi/change_plan.png": "2ddab12830dd8fc08c1732836230171c",
"assets/assets/drawable-xhdpi/malay_none_select.png": "386a129abe7ec06463b99e001ea7b4d3",
"assets/assets/drawable-xhdpi/circular_profile_icon.png": "e0a344e3bde7fcb9a0136bf40d147d8a",
"assets/assets/drawable-xhdpi/quick_action_cvp_transfer_icon.png": "bb30c097d73d842c4a9cd5ae8ed18d21",
"assets/assets/drawable-xhdpi/supported_devices_icon.png": "f6cb8f9d75f88062f9cc6c4f16b0447b",
"assets/assets/drawable-xhdpi/online_off.png": "15b0e712849a2cdc9cc4ddab4b62b62f",
"assets/assets/drawable-xhdpi/splash_icon_center.png": "93b6d4a44e6e5f22e284e904d03df056",
"assets/assets/drawable-xhdpi/validation_correct.png": "8838d1c782d2bbca957b0077c6505490",
"assets/assets/drawable-xhdpi/right_blue_arrow_icon.png": "426f54c31feda2d1bdd2d9e11004e5f7",
"assets/assets/drawable-xhdpi/icon_change_plan_copy.png": "c4eadb27bbebbce4758772c7872f349b",
"assets/assets/drawable-xhdpi/ic_drawer.png": "45ae81b686dc793ded957dcd9d5d589b",
"assets/assets/drawable-xhdpi/change_password_icon.png": "a5fba5bfb209f4b88962db735aa184e6",
"assets/assets/drawable-xhdpi/button_edit_blue_rounded_square.png": "4ef8b79fa71bab20d97bb7ee51eaf0e2",
"assets/assets/drawable-xhdpi/validation_wrong.png": "ddc70ea02f34dda60897198ac1089587",
"assets/assets/drawable-xhdpi/ic_action_delete_pink.png": "7d8a5145995b8567ea371be73e5b57e3",
"assets/assets/drawable-xhdpi/ic_launcher.png": "1b7f778710927d5f6a52a88264c723e6",
"assets/assets/drawable-xhdpi/statastics_tab_pressed.png": "a74351431466d32de30c767b5f1bbb10",
"assets/assets/drawable-xhdpi/success_icon_pink.png": "d955bfb4951fcab6cb77b1ece8c3fc0a",
"assets/assets/drawable-xhdpi/stastice_tab_grey.png": "0790de039f901fbd467462d6a6b0b623",
"assets/assets/drawable-xhdpi/stat_top_header_background.png": "76bd5532c9cc680795ff8e4f068e84f8",
"assets/assets/drawable-xhdpi/icon_registration_copy.png": "c7355dc136715c64b9f33785ce6f40e9",
"assets/assets/drawable-xhdpi/icon_bill_payment_copy.png": "be3b76a92f8e9575f98919aae0ac4764",
"assets/assets/drawable-xhdpi/own_stock_icon.png": "baa137e7f9752dd6fc2be321083f56d9",
"assets/assets/drawable-xhdpi/success_image_icon.png": "aca17bb644106376a8a230d6f0bd2ced",
"assets/assets/drawable-xhdpi/fingerprint_icon_transfer_cvp.png": "6876438dfcd81341a922d2e350f75e63",
"assets/assets/drawable-xhdpi/quick_action_logout_icon.png": "09c3a386b08d79ed29ca8b35ffbeee86",
"assets/assets/drawable-xhdpi/drawer_shadow.9.png": "d88c04632599b65c6528067663dcf2bd",
"assets/assets/drawable-xhdpi/yes_device_icon.png": "377fe217090a68f9c0c83192d6f6e02b",
"assets/assets/drawable-xhdpi/up_arrow.png": "8939063b0772bed51d4a034168ad6df9",
"assets/assets/drawable-xhdpi/ic_stat_refresh_cvp_status.png": "86111b38c681260a763c724d518eb0db",
"assets/assets/drawable-xhdpi/edit_profile_icon.png": "859e113042e685a18f3e83ba1cbde51b",
"assets/assets/drawable-xhdpi/topbar_brandcolor_blue.png": "a36e0052bd1765a70927d992453c21ee",
"assets/assets/drawable-xhdpi/icon_sales.png": "4c5a787a9416005042eb0091a2fc4c3f",
"assets/assets/drawable-xhdpi/channel_mang_icon.png": "a591f569dbd2378d9a551e98b87de6f7",
"assets/assets/drawable-xhdpi/yes_logo.png": "fc8427f76f1cc310bd081cd3c6a3cc94",
"assets/assets/drawable-xhdpi/valid_two.png": "e952df3ead418a0068428a19d9d5d0d4",
"assets/assets/drawable-xhdpi/catalog_view.png": "9a27dc5847f704457bf9513d62d54b14",
"assets/assets/drawable-xhdpi/valid_six.png": "9d5eda6e4120cc06f461e2db0931f422",
"assets/assets/drawable-xhdpi/valid_five.png": "1d1091d2ebc85d9515a79a36d08b2c6f",
"assets/assets/drawable-xhdpi/splash.9.png": "f6c696a914f9fbf518267419fc3e9a6c",
"assets/assets/drawable-xhdpi/postpaid_icon_bottom_sheet.png": "08d23fbd945f0cb4537b0063cf433edd",
"assets/assets/drawable-xhdpi/icon_account.png": "851c8cf5339ba554afae2f5ccc06e972",
"assets/assets/drawable-xhdpi/message_tab_pressed.png": "5efca7ff664c32e5333e5b2b5ae9a5ce",
"assets/assets/drawable-xhdpi/valid_seven.png": "dd5ad6d824ff850546407efd3c345d31",
"assets/assets/drawable-xhdpi/quick_action_sim_replacement.png": "426802949c45dfac276c7181054097e6",
"assets/assets/drawable-xhdpi/registration.png": "74138d979647d6b64eac718cd595e262",
"assets/assets/drawable-xhdpi/home_menu_icon_bottom_navigation_bar.png": "dd68e9c809ec6a493c9f3d1c474315a9",
"assets/assets/drawable-xhdpi/biometrics_security_title_img.png": "e05c1fda21e9787dd42ba361cd843084",
"assets/assets/drawable-xhdpi/button_add_card.png": "71276959fdb765a26aa2fadc2b3dbc30",
"assets/assets/drawable-xhdpi/valid_five_a.png": "9d5eda6e4120cc06f461e2db0931f422",
"assets/assets/drawable-xhdpi/race_invalid_transparent.png": "1cddfee60acf76471363d3c2ff90a332",
"assets/assets/drawable-xhdpi/stats_header_background.png": "00184aeecfbbd0fe79304f6d09eae0d4",
"assets/assets/drawable-xhdpi/login_switch_icon.png": "c0b6c05489315831c05868161ee309fa",
"assets/assets/drawable-xhdpi/coverage_map_icon.png": "e22606781e94fecf59ec255b1844a808",
"assets/assets/drawable-xhdpi/quick_action_scan_icon.png": "5e6028329f87a81cd9b1f0a0a8f20568",
"assets/assets/drawable-xhdpi/add_ons.png": "bb4357598d480e6b38e7a9f04608e938",
"assets/assets/drawable-xhdpi/reload.png": "23a6b349b297091c0de3ccc2a9ad251a",
"assets/assets/drawable-xhdpi/username_icon.png": "97761a068fb38aa92a9787a8a5d8bf02",
"assets/assets/drawable-xhdpi/quick_action_plans_icon.png": "eb829664cd3de10b7a2a6be3128bca9f",
"assets/assets/font/montserrat_medium.ttf": "be20f562bfe23aebd862fef39e26365a",
"assets/assets/font/montserrat_regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/assets/font/opensans_regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"assets/assets/font/montserrat_semi_bold.ttf": "31e34a4dc526ffb104e2d988f6f52516",
"assets/assets/font/oxygen_bold.ttf": "3ada7a9482cb9a123ad501e45053adb3",
"assets/assets/font/montserrat_extrabold.ttf": "9bc77c3bca968c7490de95d1532d0e87",
"assets/assets/font/oxygen_regular.ttf": "61d9daf063ba38f2d05f8adb7267e6fd",
"assets/assets/font/opensans_semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/font/montserrat_bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/assets/Pacifico-Regular.ttf": "63d7fc2ef0f495c53190ca6c457c2b96",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const docsSidebar: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'About',
      items: ['about', 'changelog']
    },
    {
      type: 'category',
      label: 'Service Instructions',
      link: {type: 'doc', id: 'docs/general/index'},
      items: [
        'docs/general/setting-up-powering-on',
        'docs/general/ipad-sound-system',
        'docs/general/starting-recording-livestream',
        'docs/general/during-service',
        'docs/general/stopping-recording-livestream',
        'docs/general/shutting-down-packing-up',
        'docs/general/stream-deck',
        'docs/general/audio-output'
      ]
    },
    {
      type: 'category',
      label: 'Cameras',
      link: {type: 'doc', id: 'docs/cameras/index'},
      items: [
        {
          type: 'category',
          label: 'PTZ Camera',
          link: {type: 'doc', id: 'docs/cameras/PTZ/index'},
          items: [
            'docs/cameras/PTZ/logging_in',
            'docs/cameras/PTZ/presets_list',
            'docs/cameras/PTZ/presets_add',
            {
              type: 'category',
              label: 'Camera Settings',
              link: {type: 'doc', id: 'docs/cameras/PTZ/settings/index'},
              items: ['docs/cameras/PTZ/settings/list']
            }
          ]
        },
        {
          type: 'category',
          label: 'Mevo Cameras',
          link: {type: 'doc', id: 'docs/cameras/mevo/index'},
          items: [
            'docs/cameras/mevo/connecting',
            {
              type: 'category',
              label: 'Camera Settings',
              link: {type: 'doc', id: 'docs/cameras/mevo/settings/index'},
              items: ['docs/cameras/mevo/settings/list']
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Computer',
      link: {type: 'doc', id: 'docs/computer/index'},
      items: [
        {
          type: 'category',
          label: 'OBS Studio',
          link: {type: 'doc', id: 'docs/computer/OBS/index'},
          items: [
            {
              type: 'category',
              label: 'Streaming Instance',
              link: {type: 'doc', id: 'docs/computer/OBS/streaming/index'},
              items: [
                'docs/computer/OBS/streaming/recording',
                'docs/computer/OBS/streaming/streaming',
                'docs/computer/OBS/streaming/virtual_camera',
                {
                  type: 'category',
                  label: 'Scenes',
                  link: {type: 'doc', id: 'docs/computer/OBS/streaming/scenes/index'},
                  items: ['docs/computer/OBS/streaming/scenes/default']
                },
                {
                  type: 'category',
                  label: 'Sources',
                  link: {type: 'doc', id: 'docs/computer/OBS/streaming/sources/index'},
                  items: [
                    'docs/computer/OBS/streaming/sources/mevo_cameras',
                    'docs/computer/OBS/streaming/sources/PTZ_camera',
                    'docs/computer/OBS/streaming/sources/proclaim',
                    'docs/computer/OBS/streaming/sources/powerpoint',
                    'docs/computer/OBS/streaming/sources/sound_system'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'All Cameras Instance',
              link: {type: 'doc', id: 'docs/computer/OBS/all_cams/index'},
              items: [
                'docs/computer/OBS/all_cams/recording',
                {
                  type: 'category',
                  label: 'Sources',
                  link: {type: 'doc', id: 'docs/computer/OBS/all_cams/sources/index'},
                  items: [
                    'docs/computer/OBS/all_cams/sources/mevo_cameras',
                    'docs/computer/OBS/all_cams/sources/PTZ_camera',
                    'docs/computer/OBS/all_cams/sources/proclaim',
                    'docs/computer/OBS/all_cams/sources/powerpoint',
                    'docs/computer/OBS/all_cams/sources/sound_system',
                    'docs/computer/OBS/all_cams/sources/outgoing_stream'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Plugins',
              link: {type: 'doc', id: 'docs/computer/OBS/plugins/index'},
              items: [
                'docs/computer/OBS/plugins/multi_output',
                'docs/computer/OBS/plugins/ndi_tools',
                'docs/computer/OBS/plugins/ptz_controls'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Proclaim',
          link: {type: 'doc', id: 'docs/computer/proclaim/index'},
          items: [
            'docs/computer/proclaim/opening_slides',
            'docs/computer/proclaim/starting_slideshow',
            'docs/computer/proclaim/screen_settings',
            'docs/computer/proclaim/NDI_settings'
          ]
        },
        {
          type: 'category',
          label: 'Stream Deck',
          link: {type: 'doc', id: 'docs/computer/streamdeck/index'},
          items: [
            'docs/computer/streamdeck/OBS_scenes',
            'docs/computer/streamdeck/recording_streaming_controls',
            {
              type: 'category',
              label: 'PTZ Camera Preset Locations',
              link: {type: 'doc', id: 'docs/computer/streamdeck/PTZ_camera/index'},
              items: [
                'docs/computer/streamdeck/PTZ_camera/adding_presets',
                'docs/computer/streamdeck/PTZ_camera/presets_list'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Streaming Locations',
          link: {type: 'doc', id: 'docs/computer/streams/index'},
          items: [
            {
              type: 'category',
              label: 'YouTube',
              link: {type: 'doc', id: 'docs/computer/streams/youtube/index'},
              items: [
                'docs/computer/streams/youtube/scheduling',
                'docs/computer/streams/youtube/starting',
                'docs/computer/streams/youtube/stopping'
              ]
            },
            {
              type: 'category',
              label: 'Facebook Live',
              link: {type: 'doc', id: 'docs/computer/streams/facebook/index'},
              items: [
                'docs/computer/streams/facebook/scheduling',
                'docs/computer/streams/facebook/starting',
                'docs/computer/streams/facebook/stopping'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Performing Maintenance',
          link: {type: 'doc', id: 'docs/computer/maintanince/index'},
          items: [
            'docs/computer/maintanince/ccleaner',
            'docs/computer/maintanince/dell_support_assist',
            'docs/computer/maintanince/windows_update',
            'docs/computer/maintanince/nvidia_update',
            'docs/computer/maintanince/proclaim_updates',
            {
              type: 'category',
              label: 'OBS Updates',
              link: {type: 'doc', id: 'docs/computer/maintanince/OBS/index'},
              items: [
                'docs/computer/maintanince/streaming_update',
                'docs/computer/maintanince/all_cams_update',
                {
                  type: 'category',
                  label: 'Plugin Updates',
                  link: {type: 'doc', id: 'docs/computer/maintanince/OBS/plugins/index'},
                  items: [
                    'docs/computer/maintanince/OBS/plugins/multi_output',
                    'docs/computer/maintanince/OBS/plugins/ndi_tools',
                    'docs/computer/maintanince/OBS/plugins/ptz_controls'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Elgato',
              link: {type: 'doc', id: 'docs/computer/maintanince/elgato/index'},
              items: [
                'docs/computer/maintanince/elgato/streamdeck',
                'docs/computer/maintanince/elgato/capture_card'
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Online Applications',
      link: {type: 'doc', id: 'docs/online/index'},
      items: [
        'docs/online/login/index',
        {
          type: 'category',
          label: 'Account Management',
          link: {type: 'doc', id: 'docs/online/account/index'},
          items: ['docs/online/account/user/index', 'docs/online/account/admin/index']
        },
        'docs/online/cms/index',
        {
          type: 'category',
          label: 'Password Repository',
          link: {type: 'doc', id: 'docs/online/passwords/index'},
          items: [
            'docs/online/passwords/accessing',
            'docs/online/passwords/viewing',
            'docs/online/passwords/adding',
            'docs/online/passwords/editing',
            'docs/online/passwords/removing'
          ]
        },
        {
          type: 'category',
          label: 'Nextcloud',
          link: {type: 'doc', id: 'docs/online/nextcloud/index'},
          items: [
            {
              type: 'category',
              label: 'Backup Files Repository',
              link: {type: 'doc', id: 'docs/online/nextcloud/backups/index'},
              items: [
                {
                  type: 'category',
                  label: 'OBS',
                  link: {type: 'doc', id: 'docs/online/nextcloud/backups/OBS/index'},
                  items: [
                    'docs/online/nextcloud/backups/OBS/all_cameras',
                    'docs/online/nextcloud/backups/OBS/streaming_scenes'
                  ]
                },
                'docs/online/nextcloud/backups/ptz_camera_configs',
                'docs/online/nextcloud/backups/router_configs'
              ]
            }
          ]
        },
        'docs/online/documentation/index'
      ]
    },
    {
      type: 'category',
      label: 'Advanced Information',
      link: {type: 'doc', id: 'docs/advanced/index'},
      items: [
        {
          type: 'category',
          label: 'Technology Listing',
          link: {type: 'doc', id: 'docs/advanced/technology/index'},
          items: [
            'docs/advanced/technology/hardware',
            'docs/advanced/technology/software',
            'docs/advanced/technology/not_in_use'
          ]
        },
        'docs/advanced/cabling/index',
        {
          type: 'category',
          label: 'Router',
          link: {type: 'doc', id: 'docs/advanced/router/index'},
          items: [
            {
              type: 'category',
              label: 'Settings',
              link: {type: 'doc', id: 'docs/advanced/router/settings/index'},
              items: ['docs/advanced/router/settings/list']
            }
          ]
        }
      ]
    }
  ]
};

export default docsSidebar;

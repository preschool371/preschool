import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import '../assets/sass/index.scss'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import GroupsPagePreview from './preview-templates/GroupsPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import GPRPagePreview from './preview-templates/GPRPagePreview'
import MissionPagePreview from './preview-templates/MissionPagePreview'
import PreschoolDayPagePreview from './preview-templates/PreschoolDayPagePreview'
import PlanPagePreview from './preview-templates/PlanPagePreview'
import ClassesPagePreview from './preview-templates/ClassesPagePreview'
import SchedulePagePreview from './preview-templates/SchedulePagePreview'
import EventsPagePreview from './preview-templates/EventsPagePreview'
import DeclarationPagePreview from './preview-templates/DeclarationPagePreview'

CMS.init()
CMS.registerMediaLibrary(cloudinary)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('gpr', GPRPagePreview)
CMS.registerPreviewTemplate('cookies', GPRPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('groups', GroupsPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('notifications', ArticlePreview)
CMS.registerPreviewTemplate('mission', MissionPagePreview)
CMS.registerPreviewTemplate('preschool_day', PreschoolDayPagePreview)
CMS.registerPreviewTemplate('plan', PlanPagePreview)
CMS.registerPreviewTemplate('classes', ClassesPagePreview)
CMS.registerPreviewTemplate('schedule', SchedulePagePreview)
CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('declaration', DeclarationPagePreview)

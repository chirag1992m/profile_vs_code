import { BsLinkedin } from 'react-icons/bs'
import { FaFileMedicalAlt, FaGithub } from 'react-icons/fa'
import { FaBoxArchive, FaGoogleScholar, FaPenNib } from 'react-icons/fa6'
import { GiBookCover } from 'react-icons/gi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { TbExternalLink } from 'react-icons/tb'

import { type SideBarNavigationSectionProps } from './src/components/SideBar/SideBarNavigation'
import { type SideBarNavigationLinkProps } from './src/components/SideBar/SideBarNavigationLink'

const homeSection: SideBarNavigationLinkProps[] = [
    {
        href: '/',
        label: 'About Me',
        icon: <RiAccountCircleFill></RiAccountCircleFill>,
        trailingIcon: null,
        isActive: true,
        isExternal: false,
    },
    {
        href: '/writing',
        label: 'Writing',
        icon: <FaPenNib></FaPenNib>,
        trailingIcon: null,
        isActive: false,
        isExternal: false,
    },
]

export const projectsSection: SideBarNavigationLinkProps[] = [
    {
        href: 'http://actionsync.ai',
        label: 'ActionSync',
        icon: <RiAccountCircleFill></RiAccountCircleFill>,
        trailingIcon: <TbExternalLink></TbExternalLink>,
        isActive: false,
        isExternal: true,
    },
    {
        href: 'http://nestaura.ai',
        label: 'NestAura',
        icon: <FaFileMedicalAlt></FaFileMedicalAlt>,
        trailingIcon: <TbExternalLink></TbExternalLink>,
        isActive: false,
        isExternal: true,
    },
    {
        href: '/ml_book',
        label: 'ML Book',
        icon: <GiBookCover></GiBookCover>,
        trailingIcon: null,
        isActive: false,
        isExternal: false,
    },
]

export const onlineSection: SideBarNavigationLinkProps[] = [
    {
        href: 'https://github.com/chirag1992m',
        label: 'Github',
        icon: <FaGithub></FaGithub>,
        trailingIcon: <TbExternalLink></TbExternalLink>,
        isActive: false,
        isExternal: true,
    },
    {
        href: 'https://www.linkedin.com/in/chirag1992m/',
        label: 'LinkedIn',
        icon: <BsLinkedin></BsLinkedin>,
        trailingIcon: <TbExternalLink></TbExternalLink>,
        isActive: false,
        isExternal: true,
    },
    {
        href: 'https://scholar.google.com/citations?user=HLmyBjQAAAAJ&hl=en',
        label: 'Google Scholar',
        icon: <FaGoogleScholar></FaGoogleScholar>,
        trailingIcon: <TbExternalLink></TbExternalLink>,
        isActive: false,
        isExternal: true,
    },
]

export const archiveSection: SideBarNavigationLinkProps[] = [
    {
        href: 'https://digital-madness.in/old_website',
        label: 'Old Profile',
        icon: <FaBoxArchive></FaBoxArchive>,
        trailingIcon: <TbExternalLink></TbExternalLink>,
        isActive: false,
        isExternal: true,
    },
]

const sections: SideBarNavigationSectionProps[] = [
    {
        label: '',
        links: homeSection,
    },
    {
        label: 'Projects',
        links: projectsSection,
    },
    {
        label: 'Online',
        links: onlineSection,
    },
    {
        label: 'Archive',
        links: archiveSection,
    },
]

export default sections

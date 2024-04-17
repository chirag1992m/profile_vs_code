'use client'
import { BsLinkedin } from 'react-icons/bs'
import { FaFileMedicalAlt, FaGithub } from 'react-icons/fa'
import { FaGoogleScholar, FaPenNib } from 'react-icons/fa6'
import { GiBookCover } from 'react-icons/gi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { TbExternalLink } from 'react-icons/tb'

import { type SideBarNavigationSectionProps } from './src/components/SideBar/SideBarNavigation'
import { type SideBarNavigationLinkProps } from './src/components/SideBar/SideBarNavigationLink'

const homeSection: SideBarNavigationLinkProps[] = [
    {
        href: '/',
        label: 'Home',
        icon: RiAccountCircleFill,
        trailingIcon: null,
        isActive: true,
        isExternal: false,
    },
    {
        href: '/writing',
        label: 'Writing',
        icon: FaPenNib,
        trailingIcon: null,
        isActive: false,
        isExternal: false,
    },
]

export const projectsSection: SideBarNavigationLinkProps[] = [
    {
        href: 'http://actionsync.ai',
        label: 'ActionSync',
        icon: RiAccountCircleFill,
        trailingIcon: TbExternalLink,
        isActive: false,
        isExternal: true,
    },
    {
        href: 'http://nestaura.ai',
        label: 'NestAura',
        icon: FaFileMedicalAlt,
        trailingIcon: TbExternalLink,
        isActive: false,
        isExternal: true,
    },
    {
        href: '/ml_book',
        label: 'ML Book',
        icon: GiBookCover,
        trailingIcon: null,
        isActive: false,
        isExternal: false,
    },
]

export const onlineSection: SideBarNavigationLinkProps[] = [
    {
        href: 'https://github.com/chirag1992m',
        label: 'Github',
        icon: FaGithub,
        trailingIcon: TbExternalLink,
        isActive: false,
        isExternal: true,
    },
    {
        href: 'https://www.linkedin.com/in/chirag1992m/',
        label: 'LinkedIn',
        icon: BsLinkedin,
        trailingIcon: TbExternalLink,
        isActive: false,
        isExternal: true,
    },
    {
        href: 'https://scholar.google.com/citations?user=HLmyBjQAAAAJ&hl=en',
        label: 'Google Scholar',
        icon: FaGoogleScholar,
        trailingIcon: TbExternalLink,
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
]

export default sections

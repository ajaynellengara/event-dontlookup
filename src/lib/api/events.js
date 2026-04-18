import { prisma } from '../prisma.js'

export async function getEvents() {
    return prisma.event.findMany({
        orderBy: { createdAt: 'desc' }
    });
}

export async function getEventBySlug(slug) {
    return prisma.event.findUnique({
        where: { slug }
    });
}

export async function getEventById(id) {
    return prisma.event.findUnique({
        where: { id }
    });
}

export async function createEvent(data) {
    return prisma.event.create({
        data
    });
}

export async function updateEvent(id, data) {
    return prisma.event.update({
        where: { id },
        data
    });
}

export async function deleteEvent(id) {
    return prisma.event.delete({
        where: { id }
    });
}

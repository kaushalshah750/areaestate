import Lead from '../models/lead.model';
import User from '../models/User.model';

export async function getAllLeads(body) {
    const { type, subType, role, user } = body;
    let whereCondition = {
        Lead_Status: subType
    };

    if (role !== "Admin") {
        whereCondition.Assign_to = user;
    } else if (role === "Admin" && type === "My") {
        whereCondition.Assign_to = user;
    }

    const leads = await Lead.findAll({
        attributes: { exclude: ['Created_by', 'Assign_to'] },
        include: [{
                model: User,
                as: 'Creator',
                attributes: ['Id', 'First_name', 'Last_name', 'Email']
            },
            {
                model: User,
                as: 'Assignee',
                attributes: ['Id', 'First_name', 'Last_name', 'Email']
            }
        ],
        where: whereCondition
    });
    return leads;
}

export async function numberOfLead(body) {
    try {
        const { user } = body;
        let whereCondition = {
            Assign_to: user
        };

        const leads = await Lead.findAll({
            attributes: { exclude: ['Created_by', 'Assign_to'] },
            include: [{
                    model: User,
                    as: 'Creator',
                    attributes: ['Id', 'First_name', 'Last_name', 'Email']
                },
                {
                    model: User,
                    as: 'Assignee',
                    attributes: ['Id', 'First_name', 'Last_name', 'Email']
                }
            ],
            where: whereCondition
        });

        var leadsCount = {
            ActiveCount: leads.filter(x => x.Lead_Status == "Active").length,
            NewCount: leads.filter(x => x.Lead_Status == "New").length,
            PendingCount: leads.filter(x => x.Lead_Status == "Pending").length,
            ScheduledCount: leads.filter(x => x.Lead_Status == "Scheduled").length,
            OverdueCount: leads.filter(x => x.Lead_Status == "Overdue").length,
            EOICount: leads.filter(x => x.Lead_Status == "EOI").length,
            BookingsCount: leads.filter(x => x.Lead_Status == "Bookings").length,
            DroppedCount: leads.filter(x => x.Lead_Status == "Dropped").length,
        }
        return leadsCount;
    } catch {
        return false;
    }
}

export async function createLead(body) {
    try {
        console.log(body)
        await Lead.create({
            ...body,
            Created_on: new Date(),
            Updated_on: new Date()
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export async function updateLead(body) {
    try {
        await Lead.update({
            ...body,
            // Lead_Status: "New",
            Updated_on: new Date()
        }, {
            where: {
                Id: body.Id
            }
        });
        return true;
    } catch {
        return false;
    }
}

export async function updateCallDetails(body) {
    try {
        await Lead.update({
            ...body,
            Updated_on: new Date()
        }, {
            where: {
                Id: body.Id
            }
        });
        return true;
    } catch {
        return false;
    }
}

export default { getAllLeads, createLead, updateLead, numberOfLead, updateCallDetails };
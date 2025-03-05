db = db.getSiblingDB("flashcards");

const collections = {
    users: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id"],
            properties: {
                _id: { bsonType: "uuid", description: "Identificador único do usuário" }
            }
        }
    },
    areas: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "owner_id", "name"],
            properties: {
                _id: { bsonType: "uuid" },
                owner_id: { bsonType: "uuid" },
                name: { bsonType: "string" },
                description: { bsonType: "string", default: "" },
                created_at: { bsonType: "date" },
                updated_at: { bsonType: "date" }
            }
        }
    },
    categories: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "owner_id", "name"],
            properties: {
                _id: { bsonType: "uuid" },
                owner_id: { bsonType: "uuid" },
                name: { bsonType: "string" },
                description: { bsonType: "string", default: "" },
                created_at: { bsonType: "date" },
                updated_at: { bsonType: "date" }
            }
        }
    },
    topics: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "owner_id", "name"],
            properties: {
                _id: { bsonType: "uuid" },
                owner_id: { bsonType: "uuid" },
                name: { bsonType: "string" },
                description: { bsonType: "string", default: "" },
                created_at: { bsonType: "date" },
                updated_at: { bsonType: "date" }
            }
        }
    },
    packages: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "owner_id", "name"],
            properties: {
                _id: { bsonType: "uuid" },
                owner_id: { bsonType: "uuid" },
                name: { bsonType: "string" },
                description: { bsonType: "string", default: "" },
                created_at: { bsonType: "date" },
                updated_at: { bsonType: "date" }
            }
        }
    },
    flash_cards: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "owner_id", "front", "back"],
            properties: {
                _id: { bsonType: "uuid" },
                original_owner_id: { bsonType: "uuid" },
                owner_id: { bsonType: "uuid" },
                area_id: { bsonType: "uuid" },
                category_id: { bsonType: "uuid" },
                topic_id: { bsonType: "uuid" },
                tags: { bsonType: "array", items: { bsonType: "string" } },
                pack_id: { bsonType: "uuid" },
                front: { bsonType: "string" },
                back: { bsonType: "string" },
                study_plans: { bsonType: "array", items: { bsonType: "uuid" } },
                created_at: { bsonType: "date" },
                updated_at: { bsonType: "date" },
                imported_at: { bsonType: "date" }
            }
        }
    },
    study_plans: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "owner_id"],
            properties: {
                _id: { bsonType: "uuid" },
                owner_id: { bsonType: "uuid" },
                studied_cards_count: { bsonType: "int" },
                streak_count: { bsonType: "int" },
                pending_cards: { bsonType: "int" },
                cards: { bsonType: "array", items: { bsonType: "uuid" } },
                created_at: { bsonType: "date" },
                updated_at: { bsonType: "date" }
            }
        }
    },
    study_sessions: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "study_plan_id", "start", "end"],
            properties: {
                _id: { bsonType: "uuid" },
                study_plan_id: { bsonType: "uuid" },
                cards_reviewed: { bsonType: "int" },
                mean_score: { bsonType: "double" },
                forgot_count: { bsonType: "int" },
                moderate_count: { bsonType: "int" },
                remembered_count: { bsonType: "int" },
                start: { bsonType: "date" },
                end: { bsonType: "date" }
            }
        }
    }
};

for (const [name, schema] of Object.entries(collections)) {
    db.createCollection(name, { validator: schema });
}

print("MongoDB collections with JSON Schema created!");

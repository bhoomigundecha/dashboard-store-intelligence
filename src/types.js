// src/types.js

/**
 * @typedef {Object} Metrics
 * @property {number} unique_visitors
 * @property {number} conversion_rate - 0.0 to 1.0
 * @property {number} current_queue_depth
 * @property {number} abandonment_rate - 0.0 to 1.0
 */

/**
 * @typedef {Object} Funnel
 * @property {number} entry
 * @property {number} zone_visit
 * @property {number} billing_queue
 * @property {number} purchase
 * @property {number[]} dropoff_pcts - [entry->zone, zone->billing, billing->purchase]
 */

/**
 * @typedef {Object} HeatmapZone
 * @property {string} zone_id
 * @property {number} score - 0 to 100
 * @property {number} avg_dwell_ms
 */

/**
 * @typedef {Object} Anomaly
 * @property {string} anomaly_type
 * @property {'INFO' | 'WARN' | 'CRITICAL'} severity
 * @property {Object} details
 * @property {string} suggested_action
 * @property {string} detected_at
 */

/**
 * @typedef {Object} SSEPayload
 * @property {Metrics} metrics
 * @property {Funnel} funnel
 * @property {HeatmapZone[]} heatmap
 * @property {Anomaly[]} anomalies
 * @property {'CONNECTED' | 'STALE_FEED'} feed_status
 * @property {number} events_ingested
 * @property {string} last_event_at
 */

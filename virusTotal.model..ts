export interface LastDnsRecord {
    type: string;
    value: string;
    ttl: number;
    priority?: number;
    rname: string;
    retry?: number;
    minimum?: number;
    refresh?: number;
    expire?: number;
    serial?: number;
}

export interface Majestic {
    timestamp: number;
    rank: number;
}

export interface Statvoo {
    timestamp: number;
    rank: number;
}

export interface Alexa {
    timestamp: number;
    rank: number;
}

export interface CiscoUmbrella {
    timestamp: number;
    rank: number;
}

export interface PopularityRanks {
    Majestic: Majestic;
    Statvoo: Statvoo;
    Alexa: Alexa;
}

export interface LastAnalysisStats {
    harmless: number;
    malicious: number;
    suspicious: number;
    undetected: number;
    timeout: number;
}

export interface CMCThreatIntelligence {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface CLEANMX {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface DNS8 {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface MalSilo {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface SnortIPSampleList {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface AICCMONITORAPP {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface BenkowCc {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface VXVault {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Securolytics {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface MalwarePatrol {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Armis {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface MalBeacon {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface ComodoValkyrieVerdict {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface PhishLabs {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface EmergingThreats {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface ForcepointThreatSeeker {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface K7AntiVirus {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface VirusdieExternalSiteScan {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface CINSArmy {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Spamhaus {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Quttera {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface AegisLabWebGuard {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface MalwareDomainList {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface CyberCrime {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Lumu {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface GoogleSafebrowsing {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Kaspersky {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface BitDefender {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Emsisoft {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface GreenSnow {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface QuickHeal {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface GData {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Segasec {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface OpenPhish {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface SucuriSiteCheck {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface AutoShun {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Trustwave {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface WebSecurityGuard {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface CyRadar {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface DesenmascaraMe {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface ADMINUSLabs {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Scantitan {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface IPsum {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface DrWeb {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface AlienVault {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Sophos {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface MalwaresComURLChecker {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Phishtank {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface EonScope {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Malwared {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Avira {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface NotMining {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Cyan {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface AntiyAVL {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface SCUMWAREOrg {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Spam404 {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface ESTsecurityThreatInside {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Certego {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface YandexSafebrowsing {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface ESET {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Threatsourcing {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface URLhaus {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface SecureBrain {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Nucleon {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface PREBYTES {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface StopForumSpam {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Blueliv {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface HopliteIndustries {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Netcraft {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface CRDF {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface ThreatHive {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface BADWAREINFO {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface FraudScore {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Fortinet {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Tencent {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface StopBadware {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface Zvelo {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface ZeroCERT {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface BaiduInternational {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface PhishingDatabase {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface AlphaMountainAi {
    category: string;
    result: string;
    method: string;
    engine_name: string;
}

export interface LastAnalysisResults {}

export interface Rsa {
    key_size: number;
    modulus: string;
    exponent: string;
}

export interface PublicKey {
    rsa: Rsa;
    algorithm: string;
}

export interface CertSignature {
    signature: string;
    signature_algorithm: string;
}

export interface Validity {
    not_after: string;
    not_before: string;
}

export interface AuthorityKeyIdentifier {
    keyid: string;
}

export interface CaInformationAccess {}

export interface Extensions {
    certificate_policies: string[];
    extended_key_usage: string[];
    authority_key_identifier: AuthorityKeyIdentifier;
    subject_alternative_name: string[];
    tags: any[];
    subject_key_identifier: string;
    crl_distribution_points: string[];
    key_usage: string[];
    CA: boolean;
    ca_information_access: CaInformationAccess;
}

export interface Issuer {
    C: string;
    CN: string;
    O: string;
}

export interface Subject {
    C: string;
    ST: string;
    CN: string;
    O: string;
    L: string;
}

export interface LastHttpsCertificate {
    size: number;
    public_key: PublicKey;
    thumbprint_sha256: string;
    tags: any[];
    cert_signature: CertSignature;
    validity: Validity;
    version: string;
    extensions: Extensions;
    signature_algorithm: string;
    serial_number: string;
    thumbprint: string;
    issuer: Issuer;
    subject: Subject;
}

export interface Categories {}

export interface TotalVotes {
    harmless: number;
    malicious: number;
}

export interface Attributes {
    last_dns_records: [];
    jarm: string;
    whois: string;
    last_https_certificate_date: number;
    tags: any[];
    popularity_ranks: any;
    last_dns_records_date: number;
    last_analysis_stats: LastAnalysisStats;
    creation_date: number;
    whois_date: number;
    reputation: number;
    registrar: string;
    last_analysis_results: LastAnalysisResults;
    last_update_date: number;
    last_modification_date: number;
    last_https_certificate: LastHttpsCertificate;
    categories: Categories;
    total_votes: TotalVotes;
}

export interface Links {
    self: string;
}

export interface Data {
    attributes: Attributes;
    type: string;
    id: string;
    links: Links;
}

export interface VirusTotalInterface {
    data: Data;
}

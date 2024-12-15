import re

def parse_ros_logs(file_content):
    """
    Parse ROS logs from the given file content.

    Args:
        file_content (str): Content of the log file.

    Returns:
        list: A list of parsed log entries as dictionaries.
    """
    log_pattern = r'^\[(?P<date>\d{4}-\d{2}-\d{2}) (?P<time>\d{2}:\d{2}:\d{2})\] \[(?P<level>[A-Z]+)\] \[(?P<node>\/[\w_]+)\] (?P<message>.+)$'
    logs = []

    for line in file_content.splitlines():
        match = re.match(log_pattern, line)
        if match:
            logs.append({
                "date": match.group("date"),
                "time": match.group("time"),
                "level": match.group("level"),
                "node": match.group("node"),
                "message": match.group("message"),
            })
    
    return logs
